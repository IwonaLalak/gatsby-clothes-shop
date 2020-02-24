import React from 'react';
import Layout from "../components/shared/layout/layout";
import SEO from "../components/shared/seo/seo";

const Subcategory = ({pageContext}) => {
    return (
        <Layout>
            <SEO title={'subcategory page'} />
            subcategory
            <div>
                {
                    JSON.stringify(pageContext, undefined, 2)
                }
            </div>
        </Layout>
    );
};

export default Subcategory;