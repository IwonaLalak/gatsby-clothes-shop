import React from 'react';
import Layout from "../components/shared/layout/layout";
import SEO from "../components/shared/seo/seo";
import {graphql, Link} from "gatsby";
import SubcategoryView from "../components/views/subcategory/SubcategoryView";
import JsonElement from "../components/shared/forTests/jsonElement";

const Subcategory = (props) => {

    let {pageContext} = props;
    let {data: {allProducts}} = props;

    return (
        <Layout>
            <SEO title={'subcategory page'}/>
            <SubcategoryView
                subcategory={pageContext}
                products={allProducts}
            />
            <div style={{marginTop: '25px'}}>
                <JsonElement value={pageContext} id={'subcategoryPC'} label={'Subcategory page context'} rows={5}/>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query getProductsInSubcategory($subcategory_id: Int!) {
      allProducts(filter: {subcategory_id: {eq: $subcategory_id}}) {
        edges {
          node {
             id
             product_id
            product_name
            product_img
            product_url
            product_price
            product_collection
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

export default Subcategory;