import React from 'react';
import {Col, Row} from "react-bootstrap";
import ProductComponent from "../../../../product/ProductComponent";

const SubcategoryProducts = ({products}) => {
    return (
        <section id={'SUBCATEGORYPRODUCTS'}>
            <Row>
                {
                    products.map(item =>
                        <Col xs={12} sm={12} md={6} lg={6} xl={4}>
                            <ProductComponent product={item.node}/>
                        </Col>
                    )
                }
            </Row>
        </section>
    );
};

export default SubcategoryProducts;