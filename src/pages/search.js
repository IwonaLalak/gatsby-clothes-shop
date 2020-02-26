import React from 'react';
import SEO from "../components/shared/seo/seo";
import Layout from "../components/shared/layout/layout";
import SearchView from "../components/views/search/SearchView";

const SearchPage = (props) => {
    return (
        <Layout>
            <SEO title="Search"/>
            <h1>szukam: {props.location.state.searchedValue}</h1>

            <SearchView pageContext={{product_name:"aaa"}}/>
        </Layout>
    );
};


export default SearchPage;