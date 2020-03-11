import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const SubcategoryHeaderSection = ({subcategory}) => {
    return (
        <section id={'SUBCATEGORYHEADER'}>
            <Container>
                <Row>
                    <Col>
                        <h1>
                            Subcategory {subcategory.subcategory_name}
                        </h1>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default SubcategoryHeaderSection;