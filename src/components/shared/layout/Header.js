import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Navbar from "./HeaderComponents/Navbar";
import Basket from "./HeaderComponents/Basket";
import {Link} from 'gatsby'

const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col lg={3} xl={2}>
                        <h1 id={'brand'}>
                            <Link to={'/'}>
                                clothes shop
                            </Link>
                        </h1>
                    </Col>
                    <Col lg={7} xl={9}>
                        <div id={'nav-container'}>
                            <Navbar/>
                        </div>
                    </Col>
                    <Col lg={2} xl={1}>
                        <Basket/>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;