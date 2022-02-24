import React from 'react';
import './Home.css';
import bgImg from '../video/bgvideo.mp4'
import {FiArrowDown} from 'react-icons/fi';
import Socialsection from './Socialsection'
import Carousel from './Carousel';
import Clients from './Clients';
import Footer from '../Footer'; 
import Newsletter from './Newsletter';
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <>
    {/* asdfg */}
    <section className='landing-page'>
      <header>
      <div className="col-12 col-s-12 video-container">
        <video src={bgImg} className="video" autoPlay loop muted type="video/mp4">
            </video>
            <div className="main-heading-wrapper">
            <h1 className="main-heading slide">Influencer Marketing<br/> 
            <span>Done Right</span></h1>
            <p className="main-para slide">As an Influencer Marketing Agency, we create the most viral,<br/> 
            captivating & ROI-focused social media influencer<br/> campaigns for brands globally.</p>
            <button type="button" class="glow-on-hover slide">
            <Link className='nav-link' to='/influencerpage'>I'm influencer</Link>
            </button>
            </div>
          </div>
      </header>
    </section>

        <Socialsection/>

        <Carousel/>

        <Clients/> 

        <Newsletter/>
    </>
  );
};

export default Home;
