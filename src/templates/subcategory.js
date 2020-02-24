import React from 'react';
import Layout from "../components/shared/layout/layout";
import SEO from "../components/shared/seo/seo";
import {graphql, Link} from "gatsby";

const Subcategory = (props) => {

    let {pageContext} = props;
    let {data: {allProduct}} = props;

    return (
        <Layout>
            <SEO title={'subcategory page'}/>
            <h1>subcategory: {pageContext.subcategory_name}</h1>
            <h5>products in subcategory:</h5>
            <ul>
                {
                    allProduct.edges.map(({node}) =>

                        <li>
                            <Link to={
                                node.productCategory.category_url
                                +
                                node.productSubcategory.subcategory_url
                                +
                                node.product_url
                            }>
                                {node.product_name}
                            </Link>
                        </li>
                    )
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
    query getProductsInSubcategory($subcategory_id: Int!) {
      allProduct(filter: {subcategory_id: {eq: $subcategory_id}}) {
        edges {
          node {
            id
            product_name
            product_url
            subcategory_id
            productCategory {
              category_id
              category_name
              category_url
            }
            productSubcategory {
              subcategory_id
              subcategory_name
              subcategory_url
            }
          }
        }
      }
}
`;

export default Subcategory;