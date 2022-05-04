import React, {useState} from 'react'
import './Toggle.css'
import { Link } from 'react-router-dom';

const Toggle = () => {


  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
  setToggleState(index);
  };

  return (

    <div className='toggle-wrapper'>
              <h1>Global ​​AI-powered​ services and technologies</h1>
        <div className='row toggle-landing '>
          <div className='toggle-container'>
            <div className='row g-0'>
              <div className='col-md-4 col-sm-12'>
              <div className="bloc-tabs">
        <h4
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Marketing Services
        </h4>
        <h4
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Talent Services
        </h4>
        <h4
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Platform & Tech
        </h4>
      </div>
              </div>
              <div className='col-md-4 col-sm-12'>
              <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2><Link to="/marketing" style={{textDecoration:"none", color:"black"}} >Influencer Marketing</Link></h2>
          <p>
          Data-driven Creator campaigns drive measurable growth
          </p>
          <h2>Paid & Performance Media</h2>
          <p>
          Integrated strategies that maximizes your media spend
          </p>
          <h2>Creative services & content Marketing</h2>
          <p>
          Full-service content creation, distribution and monetization
          </p>
          <h2>Blockchain / Web3</h2>
          <p>
          Web3, cryptoasset, and NFT services for brand and creators
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Influence talent agency</h2>
          <p>
          Full Service creator management and brand partnerships
          </p>
          <h2>Athlete talent agency</h2>
          <p>
          Unbeatable sports marketing and media for atheletes and brands
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Socialsoft</h2>
          <p>
          End to end campaign and talent management platform
          </p>
          <h2>SP Secure</h2>
          <p>
          Social Media profile history analysis and monitoring
          </p>
        </div>
      </div>
              </div>

              <div className='col-md-4 col-sm-12'>
              <div className="testimonial-heading">
                <h5>`VN Platform was born of Viral Nation’s need to change how digital content, influencers, creators and digital channels are used to drive demand for clients. It works because Viral Nation is the perfect testing ground where it has proven to boost productivity, economics and impact.``</h5>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Toggle