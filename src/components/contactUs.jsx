import React, {useState} from 'react'
import Form from './Form1.jsx'
import './contactus.css'

const ContactUs = () => {

  const [active, setactive] = useState();

  return (
    <>
    <section>
        <div className="Indigo">
          <div className="Indigo-container">
          <div className='row g-0 Red-box'>
              <div className='col-md-5 col-sm-12'>
              <div className='Indigo-body'>
                  
                  <h1>Let's Connect</h1>
                  <p>We are a collective of multi-disciplinary digital natives,all working together as one, to propel your brand online.</p>
                
                </div>
              </div>
              <div className='col-md-7 col-sm-12'>
                <div className='Indigo-img'>
                    <img src="https://images.unsplash.com/photo-1569617084133-26942bb441f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHlvdXRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='Red' />
                </div>
              </div>
              </div>
          </div>
        </div>
      </section>

      <section>
        <div className="Violet">
          <div className="Violet-container">
            <img src="" />
            <div className='row g-0 Red-box'>
              <div className='col-md-6 col-sm-12'>
                <div className='Violet-body1'>
                  <h1>Location</h1>
                </div>
              </div>
              <div className='col-md-6 col-sm-12'>
                <div className='Violet-body2'>
                  
                  <h1>Let’s connect</h1>
                
                <div className="Violet-dropdown">
                <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    What's Your Role ?
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Media</button>
    <button class="dropdown-item" type="button">Brand</button>
    <button class="dropdown-item" type="button">Influencer/Creator</button>
  </div>
</div>
                </div>
                {active === "FirstCard" && <Form title="1" />}
                <Form title="2" />
                <Form title="3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

         
        {/* <div className="row contactUs-container">
            
          
          <div class="col col-lg-3 col-md-6 col-xm-12 col-sm-6">
            <div className="contact-type">
              <h1>I am  </h1>
              <h1> <strong> Brand</strong></h1>
              <button>
                <Link to='/brandform' >Connect</Link>
              </button>
            </div>
           </div>
          <div class="col col-lg-3 col-md-6 col-xm-12 col-sm-6">
            <div className="contact-type">
              <h1>I am  </h1>
              <h1> <strong>Influencer</strong></h1>
              <button>
                <Link to='/influencerpage' > Connect</Link>
              </button>
            </div>

          </div>
          <div className=" col col-lg-6 col-md-6 col-xm-12 col-sm-12 otherOptionsToConnect">

            <div className="text-cont">
              <div>
                {" "}
                <h1 className="contactuss" >Contact Us</h1>
              </div>
             
              <div>
                <p style={{fontSize:'2rem'}} >
                   While we're good with smoke signals, there are simpler ways for us to get in touch.
                </p>
              </div>
              <div>
               <a style={{textDecoration:'none', color:'white'}} href="https://wa.me/919723232454?text=hi"> <h2>+91 9723232454</h2></a>
              </div>
              <div>
                <a className="contact-email" style={{textDecoration:'none' , color:'white', fontSize:'1.2rem'}} href="mailto: influencermarketing@soicalpubli.co.in?subject = Feedback&body = Message">
                 
                    influencermarketing@soicalpubli.co.in
                </a>
               
              </div>
            </div>
          </div>
</div> */}
        </>
  )
}

export default ContactUs