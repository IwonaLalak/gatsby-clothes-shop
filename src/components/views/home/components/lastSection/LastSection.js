import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import ProductComponent from "../../../../product/ProductComponent";

const LastSection = () => {
    return (
        <section id={'LAST'}>
            <Container>
                <Row>
                    <Col>
                        <h1>LAST COLLECTION FALL/WINTER 2019</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                        <ProductComponent/>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                        <ProductComponent/>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                        <ProductComponent/>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                        <ProductComponent/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default LastSection;