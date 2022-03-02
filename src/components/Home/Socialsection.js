import React from 'react';
import './Socialsection.css';
import styled from "styled-components";
import img from '../image/img1.jpg';
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'


const Socialsection = () => {
    return(
        <>
        <section>
        <div className='social-row-wrapper'>
        <div className="social-container">
            <div className="row g-0">
             <div className="col-md-6 colum">
            <div  className="social-body">
                <Fade left >
                <h2   className="social-title">THE WORLD'S TOP INFLUENCER MARKETING AGENCY HAS BECOME ONE OF THE GLOBE'S FASTEST GROWING FULL SERVICE MARKETING FIRMS.
                </h2>
                </Fade>
            </div>
        </div>
            <div className="col-md-6 colum img-container">
                <img src={img} class="img-fluid  " alt="..."/>
            </div>
    </div>
    </div>

        </div>
    </section>
        </>
    );
};

export default Socialsection;