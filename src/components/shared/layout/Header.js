import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Navbar from "./HeaderComponents/Navbar";
import Basket from "./HeaderComponents/Basket";

const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col lg={3} xl={2}>
                        <h1 id={'brand'}>
                            clothes shop
                        </h1>
                    </Col>
                    <Col lg={7} xl={9}>
                        <Navbar/>
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