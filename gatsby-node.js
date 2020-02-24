/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

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

    createPage({
        path: '/all',
        component: require.resolve('./src/templates/categories.js'),
        context: {arr: categories}
    });

    categories.forEach(category => {
        createPage({
            path: `${category.category_url}`,
            component: require.resolve('./src/templates/category.js'),
            context: category
        });

        if (Boolean(category.subcategories)) {
            let subcategories = category.subcategories;
            subcategories.forEach(subcategory=>{
                createPage({
                    path: `${category.category_url}${subcategory.subcategory_url}`,
                    component: require.resolve('./src/templates/subcategory.js'),
                    context: subcategory
                });
            });
        }
    });

    products.forEach(product=>{
       let category = categories.find(c=>c.category_id === product.category_id);
       let subcategory = null;

       if(Boolean(category.subcategories)){
           subcategory = category.subcategories.find(s=>s.subcategory_id === product.subcategory_id);
       }

        let subcategories = category.subcategories;
        subcategories.forEach(subcategory=>{
            createPage({
                path: `${category.category_url}${subcategory.subcategory_url}${product.product_url}`,
                component: require.resolve('./src/templates/product.js'),
                context: {
                    category,
                    subcategory,
                    product
                }
            });
        });
    });
};
