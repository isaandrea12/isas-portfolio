import React from 'react';

const Home = () => {
  return (
    <div className='container homeContainer' id='home'>
      <h1 className='homeTitle'>Quick Bio</h1>
      <p>
        Hi! I'm Isabel and I love coding, mathematics and going to gym. I also like
        solving puzzles like the rubik's cube.
      </p>
      <p>
        As a kid I discovered coding and learned the basics of programing and
        programing languages on youtube.
      </p>
      <p>
        I was amazed with the fact that with code you can build anything from the ground up, leading
        passion to persue a career in Tech.
      </p>
      <p>
        At the moment I'm a full-time Computer Engineering student at the
        University of Puerto Rico-Mayaguez Campus and I enjoy designing and
        building fast, beautiful and easy to use websites using React.js and
        CSS.
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
