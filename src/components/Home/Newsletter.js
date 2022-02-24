import React,{useState} from 'react';
import './Newsletter.css';
import news from '../image/news.jpg';

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
            <div className='row g-0'>
              <div className='col-md-6'>
                <div className='news-body'>
                <img src={news} alt="newsletter" />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='news-body'>
                <h1>Ready to Join us?</h1>
                <p>Subscribe to our newsletter for free tips and other usefull</p>
                <div className="news-form">
                <form  class="flex-form">
                <label for="from">
                <i class="ion-location"></i>
                </label>
                <input type="email" placeholder="Enter Your Email"/>
                <input type="submit" value="Subscribe"/>
               </form>
                </div>
                </div>
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
