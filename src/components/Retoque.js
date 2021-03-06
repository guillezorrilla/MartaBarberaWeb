import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import FadeIn from 'react-fade-in'
import Footer from './Footer'
import Retoque1 from '../assets/images/Retoque/Tissa-1662 original web.jpg'
import Retoque2 from '../assets/images/Retoque/17 Tissa-1662 FINAL collage retoque texto web.jpg'
import Retoque3 from '../assets/images/Retoque/Tissa- Bucket Picasso-5339 original web .jpg'
import Retoque4 from '../assets/images/Retoque/Tissa- Bucket Picasso-5339 FINAL R texto web .jpg'
import Retoque5 from '../assets/images/Retoque/IMG_6992 inst clutchs colores web.jpg'
import Retoque6 from '../assets/images/Retoque/IMG_6992-2 inst clutchs colores web.jpg'
import Retoque7 from '../assets/images/Retoque/_MG_2187 original.jpg'
import Retoque8 from '../assets/images/Retoque/_MG_2187 inst 2 web.jpg'

import ReactCompareImage from 'react-compare-image'

const Retoque = () => {
	return (
		<div>
			<FadeIn delay='300' transitionDuration='2000'>
				<h1 className='classProduct_title'>Retoque</h1>
				<Container className='producto_container'>
					<Row className='producto_row_retoque'>
						<Col lg={12}>
							<ReactCompareImage leftImage={Retoque1} rightImage={Retoque2} sliderLineWidth={4} />
						</Col>
					</Row>
					<Row className='producto_row_retoque'>
						<Col lg={12}>
							<ReactCompareImage leftImage={Retoque3} rightImage={Retoque4} sliderLineWidth={4} />
						</Col>
					</Row>
					<Row className='producto_row_retoque'>
						<Col lg={12}>
							<ReactCompareImage leftImage={Retoque6} rightImage={Retoque5} sliderLineWidth={4} />
						</Col>
					</Row>
					<Row className='producto_row_retoque'>
						<Col lg={12}>
							<ReactCompareImage leftImage={Retoque7} rightImage={Retoque8} sliderLineWidth={4} />
						</Col>
					</Row>
				</Container>
			</FadeIn>
			<Footer />
		</div>
	)
}

export default Retoque
