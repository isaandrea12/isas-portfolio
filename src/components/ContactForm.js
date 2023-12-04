import React from 'react';
const ContactForm = ({ isSubmit, sendEmail }) => {
  return (
    <div className='container' id='contact'>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      />
      <hr />

      <h1 className='contactTitle'>Contact</h1>
      {/* <div style={{ height: '26em' }} className='form'>
        {!isSubmit ? (
          <Form sendEmail={sendEmail} />
        ) : (
          <>
            <h1 className='submitMemo'>
              Thanks for submitting the contact form.
            </h1>
            <h1>I will get back to you any time soon.</h1>
          </>
        )}
      </div> */}
      <div className='contactLinks'>
        <a
          aria-label="Visit Example.com"
          href='mailto:isabelandreamuniz@gmail.com'
          target='_blank'
          rel="noreferrer"
          // className='fa fa-google'
        >
          <span aria-hidden="true" className='fa fa-google'></span>
        </a>
        {/* eslint-disable-next-line */}
        <a
          href='https://www.linkedin.com/in/isabel-mu%C3%B1iz-she-her-091a801a3/'
          target='_blank'
          rel="noreferrer"
          className='fa fa-linkedin'
        ></a>
        {/* eslint-disable-next-line */}
        <a
          href='https://github.com/isaandrea12'
          target='_blank'
          rel="noreferrer"

          className='fa fa-github'
        ></a>
      </div>
    </div>
  );
};

export default ContactForm;
