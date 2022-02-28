import React,{useState} from 'react';
import './Newsletter.css';
import news from '../image/news.jpg';
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

const Newsletter = () => {
    const [input,setInput] =  useState("");
    const inputhandler = (e) => {
        setInput(e.target.value);
    };

    const submitHandler = (e) =>{
        e.preventDefault();
        
    }
  return (
    <>
    <section>
        <div className='newsletter-wrapper'> 
    <div className='row'>
          <div className='news-container'>
            <div className='row g-0 form-row'>
              <div className='col-md-6'>
                <Zoom>
                <div className='news-body'>
                <img src={news} alt="newsletter" />
                </div>
                </Zoom>
              </div>
              <div className='col-md-6'>
                <Fade right big cascade>
                <div className='news-body'>
                <h1>Ready to Join us?</h1>
                <p>Subscribe to our newsletter for free tips and other usefull</p>
                <div className="news-form">
               
                </div>
                </div>
                <div className='form-contain '>
            <form  class="flex-form flex-form-container">
                <label for="from">
                <i class="ion-location"></i>
                </label>
                <input type="email" placeholder="Enter Your Email"/>
                <input className='submit' type="submit" value="Subscribe"/>
               </form></div>
                </Fade>
              </div>
            </div>
           
          </div>
        </div>
        </div>
    </section>
    </>
);
};

export default Newsletter;
