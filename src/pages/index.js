import React from "react"

import Layout from "../components/shared/layout/layout"
import SEO from "../components/shared/seo/seo"
import HomeView from "../components/views/home/HomeView";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeView/>
  </Layout>
)

export default IndexPage
