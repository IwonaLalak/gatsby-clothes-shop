import React from "react"

import Layout from "../components/shared/layout/layout"
import SEO from "../components/shared/seo/seo"
import HomeView from "../components/views/home/HomeView";
import {graphql} from 'gatsby';


const IndexPage = ({data:{allProducts}}) => {

    return(
        <Layout>
            <SEO title="Home" />
            <HomeView products={allProducts.edges}/>
        </Layout>
    )
}

export const query = graphql`
    query get4Products {
      allProducts(limit:4) {
        edges {
          node {
            id
            product_id
            product_name
            product_img
            product_url
            product_price
            product_bestseller
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
export default IndexPage
