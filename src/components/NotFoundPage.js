import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const NotFoundPage = () => (
	<div className="not-found-page">
		<Header />
		<div className="prueba">
			<Link className="not-found-page-link" to="/">
				Go Home
			</Link>
		</div>
	</div>
);

export default NotFoundPage;
