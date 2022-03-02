import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Brandform.css'

const Brandform = () => {
    const [userData, setUserData] = useState({
      name:"",
      brandName:"",
      email:"",
      number:"",
      message:"",
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
        const {name,
        brandName,
        email,
        number,
        message,} = userData;
        const res = await fetch(
          'https://socialpubli-7e6a6-default-rtdb.firebaseio.com/userDataRecords.json',{
            method: "POST",
            headers:{
              "Content-Type": "application/json",
            },
            body:JSON.stringify({
              name,
              brandName,
              email,
              number,
              message,
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
    <div className="influencerPage-wrapper">
      <div className='infy-heading'>
        <h1>Connect with Influencers</h1>
        <p>Become A Part of socialpubli family</p>
      </div>
      <div className="form-wrapper" method="POST">
        <div className="instaId">
          <input type="text" name='name' required value={userData.name} onChange={postUserData} />
          <label>Name<span>*</span></label>
        </div>
        <div className="instaId">
          <input type="text" name='brandName' required value={userData.brandName} onChange={postUserData} />
          <label>Brand Name<span>*</span></label>
        </div>
        <div className="instaId">
          <input type="email" name='email' required value={userData.email} onChange={postUserData} />
          <label>Email<span>*</span></label>
        </div>
        <div className="instaId">
          <input type="number" name='number' required value={userData.number} onChange={postUserData} />
          <label>Mobile<span>*</span></label>
        </div>
        <div class="form-floating message-wrapper">
         <textarea style={{overflowY:'scroll'}} class="form-control message" name='message' placeholder="Leave a comment here" id="floatingTextarea2" value={userData.message} onChange={postUserData} ></textarea>
         <label for="floatingTextarea2">Message</label>
        </div>
        <div className="genre" required >
          
          <button type="button" class="submit-button">
        <Link className='submit-link' to='/brandform' onClick={submitData} >Submit</Link>
        </button>
        </div>
         
      </div>
    </div>
</> 
  )
}

export default Brandform