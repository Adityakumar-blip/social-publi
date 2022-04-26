import React from 'react';
import './Home.css';
import bgImg from '../video/bgvideo.mp4'
import wall from '../image/new-wall-home1.png'
import {FiArrowDown} from 'react-icons/fi';
import Socialsection from './Socialsection'
import Carousel from './Carousel';
import Clients from './Clients';
import Footer from '../Footer'; 
import Newsletter from './Newsletter';
import {Link} from 'react-router-dom'
 import Headline from './headline.jsx'

const Home = () => {
  return (
    <>
     
    <section id='Home' className='landing-page'>
      <header>
      <div className=" video-container">
      <div className="main-heading-wrapper">
            <img src={wall} alt="wall" />
            <h1 className="main-heading slide">A Modern Marketing & Technology Company</h1>
            {/* <span>Done Right</span></h1> */}
            {/* <p className="main-para slide">As an Influencer Marketing Agency, we create the most viral,<br/> 
            captivating & ROI-focused social media influencer<br/> campaigns for brands globally.</p> */}
            <button className='glow slide'>
              <Link to='/influencerpage' className='glow-link'>See What's Possible</Link>
            </button>
            </div>
        {/* <video src={bgImg} className="video" autoPlay loop muted type="video/mp4">
            </video> */}
          </div>
      </header>
    </section>

        <Socialsection/>
<Headline/>
        <Carousel/>

        <Clients/> 

        <Newsletter/>
    </>
  );
};

export default Home;
