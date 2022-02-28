
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Tools.css'
import Slogan from '../image/slogan.jpg';
import campaign from '../image/campaign.jpg';
import insights from '../image/insights.png';
import search from '../image/search.png';
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

export default class tools extends Component {
  render() {
    return (
      <>
      <section>
        <div className='tools-wrapper'>
        <div className='row tools-landing '>
          <div className='tools-container'>
            <div className='row g-0'>
              <div className='col-md-6 col-sm-12'>
                <div className='tools-body'>
                  <Fade left>
                  <h2>We are the superpowers you need for your brand</h2>
                  <p>Instagram has been able to increase its popularity because of myriads of Influencers generating high-quality content that your consumers love to see. Their word is Iron and consumers trust influencer reviews more than sponsored endorsements to give them real and accurate information</p>
                  </Fade>
                </div>
              </div>
              <div className='col-md-6 col-sm-12'>
                <div className='tools-body'>
                  <Fade right>
                  <h1><span>We</span><br/> 
                  <span>Are</span><br/>
                  <span>SocialPubli</span>
                  </h1>
                    </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='heading-container'>
          <div className='heading-body'>
            <Fade top>
              <h2>The Organic Superfood You Need To Fuel Your Brand</h2>
            </Fade>
          </div>
          <div style={{margin:0}} className='row'>
            <div className='col-md-6 col-sm-6 organic-text'>
              <div className='slogan-body'>
              <Fade left>
              <p>Every brand wants to get on the Instagram ride to not only reach but connect with their followers and increase engagement. Brands from diverse industries are aiming to reach millennials and Gen Z through Instagram campaigns. It has become a great platform to build communities, engage audiences and increase sales through the platform.
              Blame it on our senses, but the more interaction we have with a product, the more familiar, comfortable and confident we feel purchasing it.</p>
              </Fade>
              </div>
            </div>
            <div className='col-md-6 col-sm-6'>
              <div className='slogan-img'>
              <Zoom>
              <img src={Slogan} alt=""/>
              </Zoom>
              </div>
            </div>
          </div>
        </div>
        <div className='power-container'>
          <div className='power-body'>
            <h2>Our Superpowers</h2>
          </div>
          <Fade bottom big cascade>
          <div className='row card-container'>
            <div className='col col-lg-4 col-md-6'>
              <div className='power-card'>
                 <div className='card py-3 py-sm-0 card-cont'>
                  <img src={campaign} alt="campaign" />
                  <div className='card-body'>
                  <h5 className='card-tittle'>Campaign Management</h5>
                  <p className='card-text'>
                  SocialPubli's Campaign management system provide best-in class work by automating the campaign process. It helps you in eliminating the back and forth processes and in creation.
                  </p>
                  <a className='btn button'>Start Campaign</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col col-lg-4 col-md-6'>
              <div className='power-card'>
                <div className='card py-3 py-sm-0 card-cont'>
                  <img src={insights} alt="campaign" />
                  <div className='card-body'>
                  <h5 className='card-tittle'>SocialPubli insights</h5>
                  <p className='card-text'>
                  Get insights of any influencer profile within seconds straight from your browser. Insights feature is upto date and provide latest reach information. You can get into any influencer's reach information.
                  </p>
                  <a className='btn button'>Start Campaign</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col col-lg-4 col-md-6'>
              <div className='power-card'>
                <div className='card py-3 py-sm-0 card-cont'>
                  <img src={search} alt="campaign" />
                  <div className='card-body'>
                  <h5 className='card-tittle'>SocialPubli Search</h5>
                  <p className='card-text'>
                  The biggest search engine for influencers! Discover thousands of influencers across niches and categories.Search the best influencer according to your need. Search feature also provide filters for your search.
                  </p>
                  <a className='btn button'>Start Campaign</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Fade>
          </div>
        </div>
      </section>
      </>
    )
  }
}
