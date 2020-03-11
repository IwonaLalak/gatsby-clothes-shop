import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ProductComponent from "../../../../product/ProductComponent";

const CategoryProducts = ({products}) => {
    return (
        <section id={'CATEGORYPRODUCTS'}>
            <Container>
                <Row>
                    <Col>
                        <h1>NEW PRODUCTS & BESTSELLERS</h1>
                    </Col>
                </Row>
                <Row>
                    {
                        products.map(item =>
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

export default CategoryProducts;