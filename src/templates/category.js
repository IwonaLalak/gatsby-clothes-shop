import React from "react"
import Layout from "../components/shared/layout/layout"
import SEO from "../components/shared/seo/seo"
import { graphql, Link } from "gatsby"
import CategoryView from "../components/views/category/CategoryView"
import JsonElement from "../components/shared/forTests/jsonElement"

const Category = (props) => {
  let { pageContext } = props
  let { data: { allProducts, file } } = props

  return (
    <Layout>
      <SEO title={"category page"}/>
      <CategoryView category={pageContext} products={allProducts} bannerImage={file.childImageSharp.fluid}/>
      <div style={{ marginTop: "25px" }}>
        <JsonElement label={"category page context"} value={pageContext} id={"cat_page_context"} rows={5}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
    query getProductsInCategory($category_id: Int!, $bannerimg:String) {
      allProducts(filter: {category_id: {eq: $category_id}}) {
        edges {
          node {
             id
             product_id
            product_name
            product_img
            product_url
            product_price
            product_collection
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
      file(relativePath: {eq: $bannerimg}) {
        id
        childImageSharp {
          fluid {
                ...GatsbyImageSharpFluid
          }
        }
        name
      }
}
`

export default Category