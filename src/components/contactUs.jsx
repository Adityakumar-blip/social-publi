import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

import "./contactus.css";
export default class contactUs extends Component {
  render() {
    return (
      <>
        <div className="row contactUs-container">
            <Fade left  cascade>
          <div className=" col col-sm-12 otherOptionsToConnect">
            <div>
              {" "}
              <h1 style={{color:'black'}} >We're Here</h1>
            </div>
            <div>
              <p  >
                While we're good with smoke signals, there are simpler ways for us to get in touch
              </p>
            </div>
            <div>
              <h2>+91 9804340458</h2>
            </div>
            <div>
              <a href="http://www.google.com">
                <i style={{color:'black'}} className="fas fa-mail-bulk fa-4x"></i>
              </a>
            </div>
          </div>
            </Fade>
          <div className="col col-sm-12 category-container">
          <div class="row category">
  <div class="col-sm-6">
    <div class="card category-card">
      <div class="card-body category-body">
        <h5 class="card-title card-heading">I am <br/> <span>Influencer</span></h5>
        <p class="card-text card-para">Coonect with the variety of brands through socialpubli and gain exposure to the larger audience. Become a part of socialpubli  <span>"Lets go viral"</span></p>
        <Link to="/influencerpage" class="btn btn-primary category-btn">Connect</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card category-card">
      <div class="card-body category-body">
        <h5 class="card-title card-heading">I am <br/> <span>Brand</span></h5>
        <p class="card-text card-para">Want your favourite influencer for marketing campaigns, contact us and we'll do it for you.Let's make your campaign succesfull</p>
        <Link to="/brandform" class="btn btn-primary category-btn">Connect</Link>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </>
    );
  }
}
