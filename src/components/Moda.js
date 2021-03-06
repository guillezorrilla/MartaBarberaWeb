import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import FadeIn from 'react-fade-in';
import Footer from './Footer';
import Moda6 from '../assets/images/Moda/_MG_7192 bin.jpg';
import Moda3 from '../assets/images/Moda/_MG_6517-2-bin.jpg';
import Moda4 from '../assets/images/Moda/IMG_0225 r.jpg';
import Moda5 from '../assets/images/Moda/IMG_8580 r.jpg';
import Moda1 from '../assets/images/Moda/_MG_6138 web.jpg';
import Moda7 from '../assets/images/Moda/_MG_8435 web.jpg';
import Moda8 from '../assets/images/Moda/DSC05244 web.jpg';
import Moda9 from '../assets/images/Moda/IMG_6809 web.jpg';
import Moda10 from '../assets/images/Moda/IMG_7112 r.jpg';
import Moda11 from '../assets/images/Moda/IMG_7885 r.jpg';
import Moda13 from '../assets/images/Moda/IMG_9004 r.jpg';
import Moda14 from '../assets/images/Moda/IMG_8984 ret.jpg';
import Moda15 from '../assets/images/Moda/_MG_5758 web.jpg';
import Moda16 from '../assets/images/Moda/IMG_9034 web.jpg';
import Moda17 from '../assets/images/Moda/IMG_5863 web Marta.jpg';
import Moda18 from '../assets/images/Moda/IMG_6105 inst.jpg';
import Moda19 from '../assets/images/Moda/_MG_9213 web.jpg';
import Moda20 from '../assets/images/Moda/_MG_9772 web.jpg';
import Moda21 from '../assets/images/Moda/_MG_9181 web.jpg';
import Moda22 from '../assets/images/Moda/_MG_9686 web.jpg';
import Moda23 from '../assets/images/Moda/_MG_9406 web.jpg';
import Moda24 from '../assets/images/Moda/_MG_9514 web.jpg';

const Moda = () => {
  return (
    <div>
      <FadeIn delay='300' transitionDuration='2000'>
        <h1 className='classProduct_title'>Retrato y Moda</h1>
        <Container className='producto_container'>
          <Row className='producto_row'>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda1} alt='Design' />
            </Col>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda8} alt='Design' />
            </Col>
          </Row>
          <Row className='producto_row'>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda19} alt='Design' />
            </Col>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda20} alt='Design' />
            </Col>
          </Row>

          <Row className='producto_row'>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda4} alt='Design' />
            </Col>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda5} alt='Design' />
            </Col>
          </Row>
          <Row className='producto_row'>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda9} alt='Design' />
            </Col>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda6} alt='Design' />
            </Col>
          </Row>
          <Row className='producto_row'>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda3} alt='Design' />
            </Col>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda13} alt='Design' />
            </Col>
          </Row>
          <Row className='producto_row'>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda21} alt='Design' />
            </Col>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda22} alt='Design' />
            </Col>
          </Row>
          <Row className='producto_row'>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda7} alt='Design' />
            </Col>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda10} alt='Design' />
            </Col>
          </Row>
          <Row className='producto_row'>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda11} alt='Design' />
            </Col>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda14} alt='Design' />
            </Col>
          </Row>
          <Row className='producto_row'>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda23} alt='Design' />
            </Col>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda24} alt='Design' />
            </Col>
          </Row>
          <Row className='producto_row'>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda15} alt='Design' />
            </Col>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda16} alt='Design' />
            </Col>
          </Row>
          <Row className='producto_row'>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda17} alt='Design' />
            </Col>
            <Col lg={6} sm={12}>
              <img className='image-producto' src={Moda18} alt='Design' />
            </Col>
          </Row>
        </Container>
      </FadeIn>
      <Footer />
    </div>
  );
};

export default Moda;
