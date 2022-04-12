import React from 'react'
import Fade from 'react-reveal/Fade'


const B2c = () => {
  return (
    <div className="b2c-wrapper">
        <div className='row b2c-landing '>
          <div className='b2c-container'>
            <div className='row g-0'>
              <div className='col-md-6 col-sm-12'>
                <div className='b2c-body'>
                  <Fade left>
                  <h2>We Excel In B2C</h2>
                  <p>Social gained its success in the B2C influencer marketing industry and in doing so we’ve perfected our processes to leverage the insight from B2C to B2B. We specialize in integrating multiple marketing channels and functions into one cohesive strategy that is completely ROI driven and proven to produce actionable results for our clients.</p>
                  </Fade>
                </div>
              </div>
              <div className='col-md-6 col-sm-12'>
                <div className='b2c-body'>
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
    </div>
  )
}

export default B2c