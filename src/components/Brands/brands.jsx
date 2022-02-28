import React, { Component } from 'react'
import './Brands.css'
import { Link } from 'react-router-dom'
import brand from '../image/about1.jpg'
import collab from '../image/collab.jpg'
import puzzle from '../image/Puzzle.jpg'
import Slide from  'react-reveal/Slide'
import Zoom from 'react-reveal/Zoom'
import Reveal from 'react-reveal/Reveal'
import Fade from 'react-reveal/Fade'

export default class brands extends Component {
  render() {
    return (
      <div className="brands-wrapper">
        <div className="brands-heading">
          <Zoom>
          <h2>OK brands, if you’re ready to be your outsourced head of all things influencers it’s time to apply to join us…</h2>
          <button type="button" className="join-button">
            <Link className='join-link' to='/brandform'>Kick Start</Link>
          </button>
          </Zoom>
        </div>

        <div className='brands-content'>
        <div style={{margin:'0'}} className='row'>
          <div className='brand-container'>
            <div className='row g-0'>
              <div className='col-md-6 col-sm-12'>
                <div className='brand-body'>
                  <Fade right>
                  <h2>Influencer Marketing isn't a fad</h2>
                  </Fade>
                  <Fade left>
                  <p>We know influencer marketing works, because we've done it ourselves. Over the last 9 years, we've started 5 online brands (including The 5th, SkinnyMe Tea and Drop Bottle) and built our Instagram following to over 16 million (combined) followers.</p>
                  <span></span>
                  <p>We’ve collaborated with over 10,000 influencers at our brands alone and learnt a thing (or ten) about what it takes to build a successful influencer campaigns and relationships from both sides of the market, as both a brand and an influencer. </p>
                  </Fade>
                </div>
              </div>
              <div className='col-md-6 col-sm-12 img-cont'>
                <div className='brand-body'>
                  <Zoom>
                  <img src={brand} alt=""/>
                  </Zoom>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className='brand-collab'>
          <Fade bottom>
          <h1>Some of the brands we worked with</h1>
          </Fade>
          <div className='collab-body'>
            <Zoom>
            <img src={collab} alt=""/>
            </Zoom>
          </div>
        </div>
        <div className="brand-service">
          <h1>Brands Services</h1>
          <div className="brand-service-container">
          <div class="card "  >
            <img src={collab} class="card-img-top collab-img" alt="..."/>
            <div class="card-body wrap">
            <p class="card-text">Conversions.</p>
            <p className='card-info'>'Hey', so you can stop wasting time sending hundreds of messages and getting no responses.</p>
          </div>
          </div>
          <div class="card"  >
            <img src={collab} class="card-img-top collab-img" alt="..."/>
            <div class="card-body wrap">
            <p class="card-text">Content.</p>
            <p className='card-info'>'Hey', so you can stop wasting time sending hundreds of messages and getting no responses.</p>
          </div>
          </div>
          <div class="card"  >
            <img src={collab} class="card-img-top collab-img" alt="..."/>
            <div class="card-body wrap">
            <p class="card-text">Conversation.</p>
            <p className='card-info'>'Hey', so you can stop wasting time sending hundreds of messages and getting no responses.</p>
          </div>
          </div>
          <div class="card"  >
            <img src={collab} class="card-img-top collab-img" alt="..."/>
            <div class="card-body wrap">
            <p class="card-text">Community.</p>
            <p className='card-info'>'Hey', so you can stop wasting time sending hundreds of messages and getting no responses.</p>
          </div>
          </div>
          </div>
        </div>
        <div className='get-start'>
          <Zoom>
          <img src={puzzle} alt="puzzle" />
          <h1>Ready to get solved?</h1>
          </Zoom>
          <Fade bottom>
          <button className="start-button">
            <Link className="get-link" to="/brandform">Get started</Link>
          </button>
          </Fade>
        </div>
      </div>
    )
  }
}
