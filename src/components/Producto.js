import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';
import Producto1 from '../assets/images/Producto/IMG_6723 bin.jpg';
import Producto2 from '../assets/images/Producto/IMG_3707 r.jpg';
import Producto3 from '../assets/images/Producto/_MG_8323 prod.JPG';
import Producto4 from '../assets/images/Producto/_MG_2870 r copia.jpg';
import Producto5 from '../assets/images/Producto/_MG_4675 inst.jpg';
import Producto7 from '../assets/images/Producto/IMG_0414 inst.jpg';
import Producto8 from '../assets/images/Producto/Image.JPG';
import Producto9 from '../assets/images/Producto/IMG_8478 2 p.jpg';
import Producto10 from '../assets/images/Producto/IMG_9291.jpg';
import Producto11 from '../assets/images/Producto/IMG_9804 inst2.jpg';
import Producto12 from '../assets/images/Producto/_MG_8675 inst.jpg';
import Producto16 from '../assets/images/Producto/IMG_0577 Ascot L  ice blue-sand perspective web.jpg';
import Producto17 from '../assets/images/Producto/IMG_0585 Ascot L ice blue-sand interior web.jpg';
import Producto15 from '../assets/images/Producto/montage en blanco roto 1 web.jpg';
import Producto13 from '../assets/images/Producto/IMG_4465 web.jpg';
import Producto14 from '../assets/images/Producto/IMG_4507 web.jpg';
import FadeIn from 'react-fade-in';

class Producto extends Component {
  render() {
    return (
      <FadeIn delay='300' transitionDuration='2000'>
        <div>
          <h1 className='classProduct_title'>Producto y diseño</h1>
          <Container className='producto_container'>
            <Row className='producto_row'>
              <Col lg={6} sm={12}>
                <img className='image-producto' src={Producto5} alt='Design' />
              </Col>
              <Col lg={6} sm={12}>
                <img className='image-producto' src={Producto14} alt='Design' />
              </Col>
            </Row>
            <Row className='producto_row'>
              <Col lg={6} sm={12}>
                <img className='image-producto' src={Producto1} alt='Design' />
              </Col>
              <Col lg={6} sm={12}>
                <img className='image-producto' src={Producto2} alt='Design' />
              </Col>
            </Row>
            <Row>
              <Col lg={6} sm={12}>
                <img className='image-producto' src={Producto13} alt='Design' />
              </Col>
              <Col lg={6} sm={12}>
                <img className='image-producto' src={Producto3} alt='Design' />
              </Col>
            </Row>
            <Row>
              <Col lg={6} sm={12}>
                <img className='image-producto' src={Producto4} alt='Design' />
              </Col>
              <Col lg={6} sm={12}>
                <img className='image-producto' src={Producto15} alt='Design' />
              </Col>
            </Row>
            <Row>
              <Col lg={6} sm={12}>
                <img className='image-producto' src={Producto7} alt='Design' />
              </Col>
              <Col lg={6} sm={12}>
                <img className='image-producto' src={Producto9} alt='Design' />
              </Col>
            </Row>
            <Row>
              <Col lg={6} sm={12}>
                <img className='image-producto' src={Producto8} alt='Design' />
              </Col>
              <Col lg={6} sm={12}>
                <img className='image-producto' src={Producto10} alt='Design' />
              </Col>
            </Row>
            <Row>
              <Col lg={6} sm={12}>
                <img className='image-producto' src={Producto11} alt='Design' />
              </Col>
              <Col lg={6} sm={12}>
                <img className='image-producto' src={Producto12} alt='Design' />
              </Col>
            </Row>
            <Row>
              <Col lg={6} sm={12}>
                <img className='image-producto' src={Producto16} alt='Design' />
              </Col>
              <Col lg={6} sm={12}>
                <img className='image-producto' src={Producto17} alt='Design' />
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      </FadeIn>
    );
  }
}

export default Producto;
