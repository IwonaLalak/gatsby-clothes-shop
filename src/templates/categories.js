import React from 'react';
import Layout from "../components/shared/layout/layout";
import SEO from "../components/shared/seo/seo";

const Categories = ({pageContext}) => {
    return (
        <Layout>
            <SEO title={'categories page'} />
            all categories
            <div>
                {
                    JSON.stringify(pageContext, undefined, 2)
                }
            </div>
        </Layout>
    );
};

export default Categories;