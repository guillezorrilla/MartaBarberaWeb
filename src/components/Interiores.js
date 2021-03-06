import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import FadeIn from 'react-fade-in'
import Footer from './Footer';
import Deco1 from '../assets/images/Interiores/IMG_0393 d.jpg';
import Deco2 from '../assets/images/Interiores/IMG_0473 d.jpg';
import Deco3 from '../assets/images/Interiores/IMG_0483 red.jpg';
import Deco4 from '../assets/images/Interiores/IMG_7243 mi habitacion.jpg';
import Deco5 from '../assets/images/Interiores/IMG_0350 d.jpg';
import Deco6 from '../assets/images/Interiores/IMG_9390 d.jpg';
import Deco7 from '../assets/images/Interiores/IMG_9383 r.jpg';
import Deco8 from '../assets/images/Interiores/IMG_0331 d.jpg';
import Deco9 from '../assets/images/Interiores/IMG_3816 d.jpg';

const Interiores = () => {
	return (
		<div>
		<FadeIn delay='300' transitionDuration='2000'>
            <h1 className="classProduct_title">Interiores</h1>
			<Container className="producto_container">
				<Row className="producto_row">
					<Col lg={6} sm={12}>
						<img
							className="image-producto"
							src={Deco1}
							alt="Design"
							/>
					</Col>
					<Col lg={6} sm={12}>
						<img
							className="image-producto"
							src={Deco2}
							alt="Design"
							/>
					</Col>
				</Row>
				<Row className="producto_row">
					<Col lg={12}>
						<img
							className="image-producto"
							src={Deco5}
							large={Deco5}
							alt="Design"
							/>
					</Col>
				</Row>
				<Row className="producto_row">
					<Col lg={6} sm={12}>
						<img
							className="image-producto"
							src={Deco3}
							alt="Design"
							/>
					</Col>
					<Col lg={6} sm={12}>
						<img
							className="image-producto"
							src={Deco4}
							alt="Design"
							/>
					</Col>
				</Row>
				<Row className="producto_row">
					<Col lg={12}>
						<img
							className="image-producto"
							src={Deco6}
							large={Deco6}
							alt="Design"
							/>
					</Col>
				</Row>
				<Row className="producto_row">
					<Col lg={12}>
						<img
							className="image-producto"
							src={Deco7}
							large={Deco7}
							alt="Design"
							/>
					</Col>
				</Row>
				<Row className="producto_row">
					<Col lg={12}>
						<img
							className="image-producto"
							src={Deco8}
							large={Deco8}
							alt="Design"
							/>
					</Col>
				</Row>
				<Row className="producto_row">
					<Col lg={12}>
						<img
							className="image-producto"
							src={Deco9}
							large={Deco9}
							alt="Design"
							/>
					</Col>
				</Row>
			</Container>
			</FadeIn>
			<Footer />
		</div>
	);
};

export default Interiores;
