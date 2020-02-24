import React from 'react';
import Layout from "../components/shared/layout/layout";
import SEO from "../components/shared/seo/seo";
import ProductView from "../components/views/product/ProductView";

const Product = ({pageContext}) => {
    return (
        <Layout>
            <SEO title={'product page'} />
            <h1>Category: {pageContext.category.category_name} / {pageContext.subcategory.subcategory_name}</h1>
            <ProductView product={pageContext.product}/>
            <div>
                {
                    JSON.stringify(pageContext, undefined, 2)
                }
            </div>
        </Layout>
    );
};

export default Product;