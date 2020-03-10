import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import ProductComponent from "../../../../product/ProductComponent";

const LastSection = ({products}) => {
    return (
        <section id={'LAST'}>
            <Container>
                <Row>
                    <Col>
                        <h1>LAST COLLECTION FALL/WINTER 2019</h1>
                    </Col>
                </Row>
                <Row>
                    {
                        products.map(item=>
                            <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                                <ProductComponent product={item.node}/>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </section>
    );
};

export default LastSection;