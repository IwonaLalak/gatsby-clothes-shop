import React from 'react';
import Layout from "../components/shared/layout/layout";
import GenerateProductView from "../components/views/generateproduct/GenerateProductView";

const GenerateProductPage = () => {
    return (
            <Layout>
                <h1>
                    generate product json
                </h1>
                <GenerateProductView/>
            </Layout>
    );
};

export default GenerateProductPage;