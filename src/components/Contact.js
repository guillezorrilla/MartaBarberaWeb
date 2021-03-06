import React from 'react';
import contacto from '../assets/images/contacto.jpg';

const openMail = () => {
  window.location.href = `mailto:${'martabarberadg@gmail.com'}`;
};

const Contact = () => (
  <div>
    <div className='contact'>
      <div className='contact-grid'>
        <h3>Contacto</h3>
        <div className='data'>
          <img className='image-contact' src={contacto} alt='' />

          <div className='contact-data'>
            <p onClick={openMail}>
              Correo:{' '}
              <span className='contact-mail'>martabarberadg@gmail.com </span>
            </p>
            <p>
              Instagram Fotografia Producto:{' '}
              <a
                className='contact-links'
                href='https://www.instagram.com/marta.bdg/'>
                @marta.bdg
              </a>{' '}
            </p>
            <p>
              Instagram Moda:{' '}
              <a
                className='contact-links'
                href='https://www.instagram.com/martabarbera__/'>
                @martabarbera__
              </a>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
