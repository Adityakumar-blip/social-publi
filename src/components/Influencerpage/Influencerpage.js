import React,{useState} from 'react'
import './Influencerpage.css'
import {Link} from 'react-router-dom'

const Influencerpage = () => {
  const [userData, setUserData] = useState({
    instaId:"",
    followers: "" ,
    number:""  ,
    genre: "" ,
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
    const {instaId,
    followers,
    number,
    genre,} = userData;
    const res = await fetch(
      'https://socialpubli-7e6a6-default-rtdb.firebaseio.com/userDataRecords.json',{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          instaId,
          followers,
          number,
          genre,
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
            <h1>Become A FameTroop</h1>
            <p>To Become A Part of socialpubli FameTroop</p>
          </div>
          <div className="form-wrapper" method="POST">
            <div className="instaId">
              <input type="text" name='instaId' required value={userData.instaId} onChange={postUserData} />
              <label>Insta-Id<span>*</span></label>
            </div>
            <div className="instaId">
              <input type="text" name='followers' required value={userData.followers} onChange={postUserData} />
              <label>Followers<span>*</span></label>
            </div>
            <div className="instaId">
              <input type="number" name='number' required value={userData.number} onChange={postUserData} />
              <label>Contact Details<span>*</span></label>
            </div>
            <div className="genre" required >
              <h5>genre<span>*</span></h5>
              <div class="form-check checkbox">
                <input class="form-check-input" name='genre' type="checkbox" value={userData.genre} onChange={postUserData}  id="flexCheckDisabled" />
                <label class="form-check-label" for="flexCheckDisabled">
                  Fashion/Lifestyle
                </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" name='genre' type="checkbox" value={userData.genre} onChange={postUserData} id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              Beauty
              </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" name='genre' type="checkbox" value={userData.genre} onChange={postUserData} id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              Food
              </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" name='genre' type="checkbox" value={userData.genre} onChange={postUserData}  id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              Travel
              </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" name='genre' type="checkbox" value={userData.genre} onChange={postUserData}  id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              Fitness
              </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" name='genre' type="checkbox" value={userData.genre} onChange={postUserData}  id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              Tech
              </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" name='genre' type="checkbox" value={userData.genre} onChange={postUserData}  id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              EdTech
              </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" name='genre' type="checkbox" value={userData.genre} onChange={postUserData}  id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              Parenting
              </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" name='genre' type="checkbox" value={userData.genre} onChange={postUserData}  id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              Finance
              </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" name='genre' type="checkbox" value={userData.genre} onChange={postUserData}  id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              Gaming
              </label>
              </div>
              <div class="form-check">
              <input class="form-check-input" name='genre' type="checkbox" value={userData.genre} onChange={postUserData}  id="flexCheckCheckedDisabled"  />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
              Auto
              </label>
              </div>
              <button type="button" class="submit-button">
            <Link className='submit-link' to='/influencerpage' onClick={submitData} >Submit</Link>
            </button>
            </div>
             
          </div>
        </div>
    </>
  )
}

export default Influencerpage