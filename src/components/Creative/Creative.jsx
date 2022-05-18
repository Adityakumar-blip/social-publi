import React from 'react'
import {Link} from 'react-router-dom'

const Creative = () => {
  return (
      <>
    <section>
        <div className="Cyan">
          <div className="Cyan-container">
          <div className='row g-0 Red-box'>
              <div className='col-md-5 col-sm-12'>
              <div className='Cyan-body'>
                  
                  <h1>Elevate your brand experience</h1>
                  <p>First-in-class creative and social media services for talent and brands</p>
                </div>
              </div>
              <div className='col-md-7 col-sm-12'>
                <div className='Cyan-img'>
                    <img src="https://images.unsplash.com/photo-1571689252452-2bd6c1e3bd29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcmZvcm1hbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='Red' />
                </div>
              </div>
              </div>
          </div>
        </div>
      </section>

      <section>
        <div className="Green">
            <div className="Green-heading">
                <h1 style={{color:"#f8971d"}} >Inspired content. Amazing results.</h1>
            </div>
            <div className='row Green-landing '>
          <div className='Green-container'>
            <div className='row g-0'>
              <div className='col-md-6 col-sm-12'>
                <div className='Green-img'>
                    <img src='https://image.shutterstock.com/image-vector/16-vector-icon-set-graph-260nw-736189543.jpg' alt='Green' />
                </div>
              </div>
              <div className='col-md-6 col-sm-12'>
                <div className='Green-body'>
                  
                  <h1>Creative and social media services</h1>
                  <p>Bring your story to life across new media, interactive, and experiential with unique content custom-​tailored to capture attention — and inspire action. Our award-winning team of creatives, storytellers, social gurus, and strategists connects the dots to drive cultural relevance in every place people connect.Our strategy-first approach ensures that media and creative are seamlessly connected, while targeted distribution and online amplification maximize reach and impact.</p>
                <Link to=""><button>Let`s Connect</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>

    <section>
      <div className="Orange">
      <div className='Orange-container'>
            <div className='row g-0'>
              <div className='col-md-6 col-sm-12'>
              <div className='Orange-body'>
                  <h1>Strategies that get seen</h1>
                  <p>Set your brand apart with content fueled by design expertise across illustrative, photographic, and video, and an unparalleled knowledge of social media platforms and best practices.<br/>

Our end-to-end approach extends from creating your customized calendar to optimizing content in alignment with ever-changing platform requirements, ensuring we create loyal brand advocates – and maximize opportunities for repurposing and monetization. </p>
                </div>
              </div>
              <div className='col-md-6 col-sm-12'>
                <div className='Orange-img'>
                    <img src='https://www.viralnation.com/wp-content/uploads/2022/04/VN-PaidPerformance-CostEffective-600x600.webp' alt='Orange' />
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>

    <section>
      <div className="Red">
        <div className="Red-container">
        <div className='row g-0 Red-box'>
              <div className='col-md-6 col-sm-12'>
                <div className='Red-img'>
                    <img src='https://www.viralnation.com/wp-content/uploads/2022/04/VN-PaidPerformance-DataDriven-600x600.webp' alt='Red' />
                </div>
              </div>
              <div className='col-md-6 col-sm-12'>
                <div className='Red-body'>
                  
                  <h1>Embrace the power of social</h1>
                  <p>From content creation and distribution to community management or always-on brand ambassador programs, we’ll work with you to craft and execute a social media strategy unique to your audience and goals.<br/>

Our relentless focus on performance is powered by best-in-class proprietary platforms, overseen by your dedicated team of social media strategists and analysts..</p>
                
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>

      </>
  )
}

export default Creative