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
                <h1   style={{color:'#5463FF'}} >Contact Us</h1>
              </div>
              <div>
                <p  >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quisquam deleniti, vero, eius tempore doloremque exercitationem
                  nihil dolores quidem reprehenderit perspiciatis nisi et?
                  Adipisci minima sunt quia
                </p>
              </div>
              <div>
               <a style={{textDecoration:'none', color:'white'}} href="https://wa.me/918859580672?text=hi"> <h2>+91 9804340458</h2></a>
              </div>
              <div>
                <a style={{textDecoration:'none' , color:'white', fontSize:'1.2rem'}} href="mailto:socialpubli.work@gmail.com?subject = Feedback&body = Message">
                 
                    socialpubli.work@gmail.com
                </a>
               
              </div>
            </div>
          </div>
</div>
        
      </>
    );
  }
}
