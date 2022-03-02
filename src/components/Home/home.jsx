import React from 'react';
import './Home.css';
import bgImg from '../video/bgvideo.mp4'
import {FiArrowDown} from 'react-icons/fi';
import Socialsection from './Socialsection'
import Carousel from './Carousel';
import Clients from './Clients';
 import Newsletter from './Newsletter';
 import Headline from './Headline.jsx';
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <>
     
    <section className='landing-page'>
      <header>
      <div className=" video-container">
      <div className="main-heading-wrapper">
            <h1 className="main-heading slide">Influencer Marketing<br/> 
            <span>Done Right</span></h1>
            <p className="main-para slide">As an Influencer Marketing Agency, we create the most viral,<br/> 
            captivating & ROI-focused social media influencer<br/> campaigns for brands globally.</p>
            <button type="button" class="glow sliding">
            <Link className='nav-link' to='/influencerpage'>I'm influencer</Link>
            </button>
            </div>
        <video src={bgImg} className="video" autoPlay loop muted type="video/mp4">
            </video>
           
          </div>
      </header>
    </section>

        <Socialsection/>
       < Headline/>
        <Carousel/>

        <Clients/> 

        <Newsletter/>
    </>
  );
};

export default Home;
