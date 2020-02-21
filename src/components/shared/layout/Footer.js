import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from 'gatsby'

const Footer = () => {
    return (
        <footer>
            <div id={'footer-up'}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                            <h6>
                                clothes shop
                            </h6>
                            <a>about us</a>
                            <a>franchising</a>
                            <a>job</a>
                            <a>find store</a>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                            <h6>
                                customer service
                            </h6>
                            <a>payment & delivery</a>
                            <a>returns</a>
                            <a>FAQ</a>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                            <h6>
                                privacy
                            </h6>
                            <a>privacy policy</a>
                            <a>terms of sale</a>
                            <a>information about cookies</a>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                            <h6>
                                follow us
                            </h6>
                            <div id={'social-icons-container'}>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id={'footer-bottom'}>
                <h1>clothes shop</h1>
                <div id={'copyright'}>
                    clothes shop &copy; 2020 | test project in gatsby by <Link to={'https://iwonalalak.pl/'}>Iwona Lalak</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;