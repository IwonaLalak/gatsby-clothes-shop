import React from 'react';
import Layout from "../components/shared/layout/layout";
import SEO from "../components/shared/seo/seo";

const Subcategory = ({pageContext}) => {
    return (
        <Layout>
            <SEO title={'subcategory page'} />
            <h1>subcategory: {pageContext.subcategory_name}</h1>
            <div>
                {
                    JSON.stringify(pageContext, undefined, 2)
                }
            </div>
        </Layout>
    );
};

export default Subcategory;