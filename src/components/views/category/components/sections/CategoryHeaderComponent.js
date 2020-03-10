import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

const CategoryHeaderSection = ({category}) => {
    return (
        <section id={'CATEGORYHEADER'}>
            <Container>
                <Row>
                    <Col>
                        <h1>
                            Category {category.category_name}
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries, but also
                            the leap
                            into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default CategoryHeaderSection;