import React, { Component } from 'react'
import './footer.css'
export default class Footer extends Component {
  render() {
    return (
      <>
       <div className="footer-wrapper">
           <h1>India's Number one Influncer Marketing Plateform.</h1>
           <div className="column-wrapper row">
           <div className='column col-4'>
               <a  href=""><h1  >SocialPubli</h1></a>
               <a href="">Home</a>
               <a href="">Influencer</a>
               <a href="">Brand</a>
               <a href="">Our Work</a>
           </div>
           <div className='  col-8 Links' > 
           <a className='link '  href=""><i class="fab fa-instagram fa-4x" ></i></a>
           <a className='link ' href=""> <i class="fab fa-facebook fa-4x" ></i></a>
           <a className='link ' href=""> <i class="fab fa-twitter fa-4x" ></i></a>
           <a className='link ' href=""> <i class="fab fa-linkedin fa-4x" ></i></a>
           </div>
             <h6>copyright @2022</h6> 
           </div>
      
      
       </div>
      </>
    )
  }
}
