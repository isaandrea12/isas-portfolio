import React from 'react';

const Footer = () => {
  return (
    <div className='footerContainer'>
      <footer>
        <div className='footerTextContainer'>
          <span className='footerText'>
            &copy; {new Date().getFullYear()} ISABEL ANDREA MUNIZ'S PORTFOLIO{' '}
          </span>
          &nbsp;
          <span className='footerText'>Design by JOSE GONZALEZ-MASSINI</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
