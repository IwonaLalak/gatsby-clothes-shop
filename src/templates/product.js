import React from 'react';
import Layout from "../components/shared/layout/layout";
import SEO from "../components/shared/seo/seo";
import ProductView from "../components/views/product/ProductView";

const Product = ({pageContext}) => {
    return (
        <Layout>
            <SEO title={'product page'} />
            <ProductView/>
            <div>
                {
                    JSON.stringify(pageContext, undefined, 2)
                }
            </div>
        </Layout>
    );
};

export default Product;