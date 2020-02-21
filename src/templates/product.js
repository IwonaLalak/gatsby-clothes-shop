import React from 'react';
import Layout from "../components/shared/layout/layout";
import SEO from "../components/shared/seo/seo";
import ProductView from "../components/views/product/ProductView";

const Product = () => {
    return (
        <Layout>
            <SEO title={'product page'} />
            <ProductView/>
        </Layout>
    );
};

export default Product;