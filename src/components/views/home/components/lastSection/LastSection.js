import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

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
                        produkt
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                        produkt
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                        produkt
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                        produkt
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default LastSection;