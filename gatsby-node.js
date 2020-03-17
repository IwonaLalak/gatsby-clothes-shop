/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const _ = require('lodash');
const axios = require('axios');
const {api} = require('./hidden');

const getCategories = () => axios({
    method: 'get',
    url: `${api}getcategories.php`
});

const getProducts = () => axios({
    method: 'get',
    url: `${api}getproducts.php`
});

exports.createPages = async ({actions: {createPage}}) => {
    const categoriesData = await getCategories();
    const categories = categoriesData.data;

    const productsData = await getProducts();
    const products = productsData.data;

    categories.forEach(category => {
        createPage({
            path: `${category.category_url}`,
            component: require.resolve('./src/templates/category.js'),
            context: Object.assign(category,{bannerimg:`category/${category.category_name.toLowerCase()}.jpg`})
        });

        if (Boolean(category.subcategories)) {
            let subcategories = category.subcategories;
            subcategories.forEach(subcategory => {
                createPage({
                    path: `${category.category_url}${subcategory.subcategory_url}`,
                    component: require.resolve('./src/templates/subcategory.js'),
                    context: subcategory
                });
            });
        }
    });

    products.forEach(product => {
        let category = categories.find(c => c.category_id === product.category_id);
        let subcategory = '';

        if (Boolean(category.subcategories)) {
            subcategory = category.subcategories.find(s => s.subcategory_id === product.subcategory_id);
        }

        createPage({
            path: `${category.category_url}${subcategory.subcategory_url}${product.product_url}`,
            component: require.resolve('./src/templates/product.js'),
            context: {
                category: _.omit(category,"subcategories"),
                subcategory,
                product
            }
        });
    });
};

exports.sourceNodes = async ({actions, createNodeId, createContentDigest}) => {
    const categoriesData = await getCategories();
    const categories = categoriesData.data;

    categories.forEach(category => {
        const node = {
            id: createNodeId(`Category-${category.category_id}`),
            ...category,
            internal: {
                type: "Categories",
                contentDigest: createContentDigest(category),
            },
        };
        actions.createNode(node)
    });


    const productsData = await getProducts();
    const products = productsData.data;

    products.forEach(product => {
        let category = categories.find(c => c.category_id === product.category_id);
        let subcategory = '';

        if (Boolean(category.subcategories)) {
            subcategory = category.subcategories.find(s => s.subcategory_id === product.subcategory_id);
        }

        const node = {
            id: createNodeId(`Product-${product.product_id}`),
            ...product,
            ...(_.omit(category,"subcategories")),
            ...subcategory,
            internal: {
                type: "Products",
                contentDigest: createContentDigest(product),
            },
        };
        actions.createNode(node);
    });
};