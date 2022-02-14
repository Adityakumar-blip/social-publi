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
        <div className='row'>
        <div className="card">
            <div className="row g-0">
            <div className="col-md-6">
                <img src={news} class="img-fluid rounded-start" alt="..."/>
            </div>
        <div className="col-md-6">
            <div className="card-body">
                <h2 className="card-title">Ready to Hear from us..</h2>
                <h4>One Newsletter for daily updates of the market <br/>trends and growing Influencers</h4>
                <div className="newsletter">
                  <form className='news-email' onSubmit={submitHandler}>
                      <input type='email' placeholder='enter your email'  onChange={inputhandler} />
                      <button type='submit'>Subscribe</button>
                  </form>
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
