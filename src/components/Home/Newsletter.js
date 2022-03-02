import React,{useState} from 'react';
import './Newsletter.css';
import news from '../image/news.jpg';
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

const Newsletter = () => {
  const [userData, setUserData] = useState({
    newsletter:"",
    });
    
    let name, value;
    function postUserData(event) {
      name = event.target.name;
      value = event.target.value;
  
      setUserData({ ...userData, [name]:value })
    }
  
    // connect to firebase
    const submitData = async(event) => {
      event.preventDefault();
      const { 
        newsletter,
      } = userData;
      const res = await fetch(
        'https://socialpubli-7e6a6-default-rtdb.firebaseio.com/userDataRecords.json',{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            newsletter,
          }),
        }
        );
  
        if(res) {
          alert("Data Stored")
        }else {
          alert("Please fill the Data")
        }
    };
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
            <form method='POST' class="flex-form flex-form-container">
                <label for="from">
                <i class="ion-location"></i>
                </label>
                <input type="email" className='email-data' name="newsletter" value={userData.newsletter} placeholder="Enter Your Email" onChange={postUserData}/>
                <input className='submit ' type="submit" onClick={submitData} value="Subscribe"/>
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
