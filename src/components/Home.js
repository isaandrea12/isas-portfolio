import React from 'react';

const Home = () => {
  return (
    <div className='container homeContainer' id='home'>
      <h1 className='homeTitle'>Quick Bio</h1>
      <p>
        Hi! I'm Isabel
      </p>
      <p>
       Qui deserunt culpa laborum Lorem id ad Lorem veniam. Mollit nostrud adipisicing minim Lorem minim veniam esse fugiat deserunt cupidatat velit voluptate minim elit. Dolore laborum cillum tempor enim exercitation sit aliquip ut. 
      </p>
      <p>
        Non anim elit exercitation incididunt deserunt elit dolore veniam do reprehenderit eiusmod pariatur. Exercitation officia mollit et esse eu exercitation non consectetur ad exercitation eiusmod amet velit. Quis culpa elit veniam ex sunt duis ullamco magna est eu eu amet mollit velit. Tempor do aliquip laborum tempor dolore ipsum consectetur Lorem quis pariatur deserunt duis.
      </p>
      <p>
       Proident magna exercitation laboris do laboris reprehenderit mollit eiusmod elit voluptate exercitation commodo do consequat. Minim consequat adipisicing ad pariatur qui aliqua qui elit officia Lorem ullamco aliqua. Et eu velit aute id et consequat dolor cillum cupidatat nulla.
      </p>
      <p style={{ paddingBottom: 50}}>
        Feel free to contact me filling the form at the bottom of this page and
        I will get back to you as soon as possible.
      </p>
      {/* <div className='contactHomeLinkContainer'>
        <Link
          className='contactHomeLink'
          to='contact'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Click Here To Contact <span className='arrow'>&#8595;</span>
        </Link>
      </div> */}
      {/* <Link to='/' className='btn'>
        Back Home
      </Link> */}
    </div>
  );
};

export default Home;
