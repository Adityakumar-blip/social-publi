import React, { Component } from 'react'
import './footer.css'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import brand from './image/png-logo.png';

export default class Footer extends Component {
  render() {
    return (
      <>
     <section className='Pink'>India's No.1 Influencer Marketing Platform</section>
<footer class="footer-distributed">

			<div class="footer-left">

      <Link className="navbar-brand" to="/">
                <img src={brand} alt=".."/>
                </Link>

				<p class="footer-links">
					<Link to="/" class="link-1">Home</Link>
					
					<Link to="/services">Services</Link>
				
					<Link to="/influencer">Work</Link>
				
					<Link to="/brands">Brands</Link>
					
					<Link to="/tools">Tools</Link>
					
					<Link to="/about">About</Link>

          <Link to='/contactus'>Contact</Link>
				</p>

				<p class="footer-company-name"> SocialPubli © 2022</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Jetalpur Road</span>Vadodara , Gujarat</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+91783812132</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">influencermarketing@soicalpubli.co.in</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div class="footer-icons">

					<a className='face' href="#"><i class="fa fa-facebook"></i></a>
					<a className='twitt' href="#"><i class="fa fa-twitter"></i></a>
					<a className='linkd' href="#"><i class="fa fa-linkedin"></i></a>
					<a className='insta' href="#"><i class="fa fa-instagram"></i></a>

				</div>

			</div>

		</footer>
      </>
    )
  }
}
