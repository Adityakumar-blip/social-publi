import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

import "./contactus.css";
export default class contactUs extends Component {
  render() {
    return (
      <>
         
        <div className="row contactUs-container">
            
          
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
                <h1 style={{color: '#4158D0'}}   className="contactuss" >Contact Us</h1>
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
                <a style={{textDecoration:'none' , color:'white', fontSize:'1.5rem'}} href="mailto: influencermarketing@soicalpubli.co.in?subject = Feedback&body = Message">
                 
                    influencermarketing@soicalpubli.co.in
                </a>
               
              </div>
            </div>
          </div>
</div>
        
      </>
    );
  }
}
