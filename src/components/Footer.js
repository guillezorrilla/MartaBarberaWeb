import React from 'react';
import instagram from '../assets/images/instagram2.png';
import email from '../assets/images/mail-1.png';

const openInstagram = () => {
  window.open('https://www.instagram.com/martabarbera__/', '_blank');
};

const openMail = () => {
  window.location.href = `mailto:${'martabarberadg@gmail.com'}`;
};

const Footer = () => (
  <div className='footer' id='footer'>
    <div className='container-fluid'>
      <img
        onClick={openInstagram}
        src={instagram}
        alt='instagram/martabarbera__'
        className='social-icon-instagram'
      />
      <img
        onClick={openMail}
        src={email}
        alt='mail'
        className='social-icon-mail'
      />
      <p className='footer-email footer__underline'>martabarberadg@gmail.com</p>
      <p className='footer-email'>Madrid</p>
      <p className='footer-email footer-last'>Spain</p>
    </div>
  </div>
);

export default Footer;
