import React from 'react';
import Layout from "../components/shared/layout/layout";
import SEO from "../components/shared/seo/seo";
import {graphql, Link} from 'gatsby';

const Category = (props) => {
    let {pageContext} = props;
    let {data: {allProduct}} = props;

    const checkIfThereAreSomeProducts = (subcategory_id) => {

        let products = allProduct.edges.filter(item => subcategory_id === item.node.subcategory_id);
        if (products.length > 0)
            return products.length
        else
            return 0
    };

    return (
        <Layout>
            <SEO title={'category page'}/>
            <h1>
                Category: {pageContext.category_name}

            </h1>
            <h3>
                {allProduct.edges.length} products
            </h3>
            <h5>subcategories:</h5>
            <ul>
                {
                    pageContext.subcategories.map(subcategory => <li>
                        <Link
                            to={pageContext.category_url + subcategory.subcategory_url}>
                            {subcategory.subcategory_name}
                        </Link>
                        <span style={{marginLeft: '15px'}}>
                            {checkIfThereAreSomeProducts(subcategory.subcategory_id)} products
                        </span>
                    </li>)
                }
            </ul>
            <div>
                {
                    JSON.stringify(pageContext, undefined, 2)
                }
            </div>
        </Layout>
    );
};

export const query = graphql`
    query getProductsInCategory($category_id: Int!) {
      allProduct(filter: {category_id: {eq: $category_id}}) {
        edges {
          node {
            id
            product_name
            category_id
            subcategory_id
          }
        }
      }
}
`;

export default Category;