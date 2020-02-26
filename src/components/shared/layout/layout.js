/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./Header";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/imports.css'
import {Provider} from 'react-redux';
import store from './../../../redux_storage/store';


const Layout = ({children}) => {

    return (
        <Provider store={store}>
            <div id={'LAYOUT'}>
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>
        </Provider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
