import React, { Component } from 'react'
import './footer.css'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <>
       <div className="footer-wrapper">
        <Zoom>
          <h1>India's Number one Influncer Marketing Plateform.</h1>
        </Zoom> 
           <div className="column-wrapper row">
          <Fade left cascade>
           <div className='column col-lg-4  col-sm-4'>
               <a  href=""><h1  >SocialPubli</h1></a>
               <Link to="/">Home</Link>
               <Link to="/services">Services</Link>
               <Link to="/influencer">Work</Link>
               <Link to="/brands">Brand</Link>
               <Link to='/tools'>Tools</Link>
               <Link to="/about">About</Link>
               <Link to="/contactUs">Contact Us</Link>
           </div>
           </Fade>
           <div className='  col-lg-8 col-sm-8  Links' > 
           <Fade bottom cascade>
           <a className='link '  href=""><i class="fab fa-instagram fa-4x" ></i></a>
           <a className='link ' href=""> <i class="fab fa-facebook fa-4x" ></i></a>
           <a className='link ' href=""> <i class="fab fa-twitter fa-4x" ></i></a>
           <a className='link ' href=""> <i class="fab fa-linkedin fa-4x" ></i></a>
           </Fade>
           </div>
             <h6>copyright @2022</h6> 
           </div>
      
      
       </div>
      </>
    )
  }
}
