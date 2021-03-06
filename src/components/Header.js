import React from 'react'
import { Link } from 'react-router-dom'
// import instagram from './assets/images/instagram2.png';
// import mail from './assets/images/mail.png';

const Header = () => {
	return (
		<div className='colored-section'>
			<div className='container-fluid'>
				<Link className='title' to='/'>
					<h1 className='title-image'>MARTA BARBERÁ</h1>
				</Link>

				<nav className='navbar navbar-expand-lg navbar-light text-center'>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarTogglerDemo02'
					>
						<span className='navbar-toggler-icon' />
					</button>

					<div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
						<ul className='navbar-nav m-auto'>
							<li className='nav-item'>
								<Link className='nav-link' to='/producto'>
									Producto y Diseño
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/moda'>
									Retrato y Moda
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/retoque'>
									Retoque
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/interior'>
									Interiores
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/contact'>
									Contacto
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	)
}

export default Header
