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
                  
                  <h1>Pinpoint your audience and <br/> achieve your performance goals</h1>
                  <p>Where creative content meets customer intimacy at scale</p>
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
                <h1 style={{color:"#f8971d"}} >All performance. No anxiety.</h1>
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
                  
                  <h1>Paid and performance media services</h1>
                  <p>Maximize your media spend with integrated strategies that guarantee results — regardless of changing algorithms.
                    Our global team of performance marketing experts will work with you to develop strategy-first, conversion-centric campaigns across every digital channel. Always-on automation means your campaign is optimized 24/7 – regardless of size or complexity – by advanced, machine-learning technologies..</p>
                
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
                  <h1>Custom, cost-effective digital media marketing</h1>
                  <p>We work the way you do – from end-to-end campaign management to working in collaboration with your agency or in-house team.<br/><br/>
                  <span className='orange-text'>Pay only for your desired results – clicks, conversions, downloads, installs, or sales – for the most mileage from your media spend, with clear and concise reporting on metrics that actually matter.</span> </p>
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
                  
                  <h1>Data-driven performance</h1>
                  <p>Extensive demographic and behavior mapping identifies and targets your ideal customer profiles – wherever they are.<br/><br/>
                  Our full-stack, best-in-class Adtech uncovers even the hardest-to-reach targets, with conversion-focused content that makes funnels move faster.</p>
                
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