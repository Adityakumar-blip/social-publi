import React from 'react'
import './About.css';
import Slogan from '../image/slogan.jpg';
import Typewriter from 'typewriter-effect';
import about1 from '../image/about1.jpg';
import about2 from '../image/about2.jpg';
import about3 from '../image/about3.jpg'
import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide'

function About() {
  return (
    <section>
      <div className='about-wraapper'>
        <div className="about-heading">
          <Zoom>
          <h2>The SocialPubli's Secret</h2>
          <p>we're telling you our story.</p>
          </Zoom>
        </div>

        <div className="typewriter-container">
          <h1 className="typewriter-heading">
            We're
          </h1>
          <div className="typewriter-text">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  'Entrepreneurs',
                  'Superheroes',
                  'Pioneers'
                ]
              }} />
          </div>
        </div>

        <div className='first-container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className="first-heading">
                <Zoom>
                <h4>Our Mission</h4>
                </Zoom>
              </div>
              <div className='first-body'>
                <Slide>
                  <p>
                    We are here to tell impactful brand stories and set trends through authentic influencer marketing campaigns on digital platforms. We facilitate proliferating brands to collaborate with prominent nano, micro, macro or mega level influencers as per their needs and create strong brand advocacy through their follower base.
                  </p>
                </Slide>
              </div>
            </div>
            <div className='col-md-6'>
                <div className='first-img'>
                  <Zoom>
                  <img src={about1} alt="" />
                  </Zoom>
                </div>
            </div>
          </div>
        </div>

        <div className='second-container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='second-img'>
                <Zoom>
                <img src={about2} alt="" />
                </Zoom>
              </div>
            </div>
            <div className='col-md-6'>
              <div className="second-heading">
                <Zoom>
                <h4>Our Vision</h4>
                </Zoom>
              </div>
              <div className='second-body'>
                <Slide>
                <p>
                  We want to gap the bridge between quality influencers and growing brands. We aim for a world where influencer marketing is omnipresent, be it an event, campaign, piece of content, or product.
                </p>
                </Slide>
              </div>
            </div>
          </div>
        </div>

        <div className='third-container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className="third-heading">
                <Zoom>
                <h4>Our Story</h4>
                </Zoom>
              </div>
              <div className='third-body'>
                <Slide>
                <p>
                  We're a bunch of experienced entrepreneurs, marketeers & tech geeks with an adept sense of story-telling. Therefore, we want to put out your brand stories into the dynamic world of social media through compelling influencer marketing campaigns. We believe that the future lies in the beautiful blend of technology & people, and we're here to make it happen with you.
                  Drop in your queries and our team will get in touch with you.
                </p>
                </Slide>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='third-img'>
                <Zoom>
                <img src={about3} alt="" />
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}

export default About