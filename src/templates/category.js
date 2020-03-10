import React from 'react';
import Layout from "../components/shared/layout/layout";
import SEO from "../components/shared/seo/seo";
import {graphql, Link} from 'gatsby';
import CategoryView from "../components/views/category/CategoryView";
import JsonElement from "../components/shared/forTests/jsonElement";

const Category = (props) => {
    let {pageContext} = props;
    let {data: {allProducts}} = props;

    return (
        <Layout>
            <SEO title={'category page'}/>
            <CategoryView category={pageContext} products={allProducts}/>
            <div style={{marginTop:'25px'}}>
                <JsonElement label={'category page context'} value={pageContext} id={'cat_page_context'} rows={5}/>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query getProductsInCategory($category_id: Int!) {
      allProducts(filter: {category_id: {eq: $category_id}}) {
        edges {
          node {
             id
            product_name
            product_img
            product_url
            product_price
            product_sizes{
                size
                size_number
                available
            }
            product_variants{
                variant_icon
                variant_id
                variant_name
            }
            category_id
            category_url
            subcategory_id
            subcategory_url
          }
        }
      }
}
`;

export default Category;