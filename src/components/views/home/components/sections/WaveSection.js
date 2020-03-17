import React from 'react';
import {SVG} from "../../../../shared/svg/SVG";
import {pathBottom, pathDimensions, pathHeight, pathTOP} from "../../../../../utilities/svgPaths";
import {Col, Container, Row} from "react-bootstrap";
import Scrollspy from 'react-scrollspy'

const WaveSection = () => {
    return (
      <Scrollspy items={['WAVE']} currentClassName="is-current" className={'scrollspy'}>
          <section id={'WAVE'}>
              <SVG fill={'#FFF'} viewbox={pathDimensions()} path={pathTOP()} />
              <Container>
                  <Row>
                      <Col lg={6} xl={6}>
                          <div className={'wave-column first'}>
                              <h1>FINAL SALE</h1>
                              <h2>
                                  up to -70% <br />
                                  until 04/2020
                              </h2>
                          </div>
                      </Col>
                      <Col lg={6} xl={6}>
                          <div className={'wave-column last'}>
                              <h1>NEXT COLLECTION</h1>
                              <h2>
                                  spring 2020 <br />
                                  from 03/2020
                              </h2>
                          </div>
                      </Col>
                  </Row>
              </Container>
              <SVG fill={'#FFF'} viewbox={pathDimensions()} path={pathBottom()}/>

          </section>
      </Scrollspy>

    );
};

export default WaveSection;