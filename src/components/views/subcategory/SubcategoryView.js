import React from 'react';
import SubcategoryHeaderSection from "./components/sections/SubcategoryHeaderSection";
import {Col, Container, Row} from "react-bootstrap";
import SubcategoryProducts from "./components/sections/SubcategoryProducts";
import SubcategoryFilters from "./components/filters/SubcategoryFilters";

const SubcategoryView = ({subcategory, products}) => {
    return (
        <div id={'SUBCATEGORYVIEW'}>
            <SubcategoryHeaderSection subcategory={subcategory}/>
            <Container>
                <Row>
                    <Col lg={3} xl={3}>
                        <SubcategoryFilters/>
                    </Col>
                    <Col lg={9} xl={9}>
                        <SubcategoryProducts products={products.edges}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SubcategoryView;
