import React from 'react';
import Layout from "../components/shared/layout/layout";
import SEO from "../components/shared/seo/seo";

const Category = ({pageContext}) => {
    return (
        <Layout>
            <SEO title={'category page'} />
            category
            <div>
                {
                    JSON.stringify(pageContext, undefined, 2)
                }
            </div>
        </Layout>
    );
};

export default Category;