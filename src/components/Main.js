import React from 'react';
import design from '../assets/images/minimalista.jpg';
import moda from '../assets/images/_MG_9514 web 1x1.jpg';
import retoque from '../assets/images/retoque.jpg';
import interior from '../assets/images/interior.jpg';
import Footer from './Footer';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

const Main = () => {
  return (
    <div>
      <FadeIn delay='300' transitionDuration='2000'>
        <Container>
          <Row>
            <Col lg={6} sm={12}>
              <Link to='/producto' className='hovereffect'>
                <img
                  rel='preload'
                  className='img-responsive image'
                  src={design}
                  alt='desgin'
                />
                <div className='overlay'>
                  <h2>Producto y Diseño</h2>
                </div>
              </Link>
            </Col>
            <Col lg={6} sm={12}>
              <Link to='/moda' className='hovereffect'>
                <img
                  rel='preload'
                  className='img-responsive image'
                  src={moda}
                  alt='desgin'
                />
                <div className='overlay'>
                  <h2>Retrato y Moda</h2>
                </div>
              </Link>
            </Col>
          </Row>
          <Row lg={6} sm={12}>
            <Col>
              <Link to='retoque' className='hovereffect'>
                <img
                  rel='preload'
                  className='img-responsive image'
                  src={retoque}
                  alt='desgin'
                />
                <div className='overlay'>
                  <h2>Retoque</h2>
                </div>
              </Link>
            </Col>
            <Col lg={6} sm={12}>
              <Link to='interior' className='hovereffect'>
                <img
                  rel='preload'
                  className='img-responsive image'
                  src={interior}
                  alt='desgin'
                />
                <div className='overlay'>
                  <h2>Interiores</h2>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </FadeIn>

      <Footer />
    </div>
  );
};

export default Main;
