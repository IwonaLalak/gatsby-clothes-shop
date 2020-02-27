import React from 'react';
import Layout from "../components/shared/layout/layout";
import SEO from "../components/shared/seo/seo";
import BasketView from "../components/views/basket/BasketView";

const BasketPage = () => {
    return (
        <Layout>
            <SEO title="Basket" />
            <BasketView/>
        </Layout>
    );
};

export default BasketPage;