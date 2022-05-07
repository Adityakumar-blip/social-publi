import React,{useState} from 'react'
import './Possible.css'
import { Link } from 'react-router-dom';

const Possible = () => {

    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
  setToggleState(index);
  };

  const [userData, setUserData] = useState({
    instaId: "",
    email: "",
    number: "",
    city:"",
    date:"",
    state:"",
    name:"",
    genre: "",
    youtube:"",
    gender:""

  });

  let name, value;
  function postUserData(event) {
    name = event.target.name; 
    value = event.target.value;
    console.log(name, value)
    if (name == 'genre') {
      let data = userData.genre;
      let dataArr = data.split(",");
      let flag = false;
      for (let i = 0; i < dataArr.length; i++) { 
        if (dataArr[i] === value  ) {
          dataArr.splice(i, 1);
          flag = true;
          break;
        }
        
      }
      console.log(dataArr )
      if (flag === false) {
        let newgenre = data + ',' + value;
        setUserData(
          {
            ...userData,
            [name]: newgenre,

          }
        )
      }


    } else {
      setUserData({ ...userData, [name]: value })
    }
  }

  // connect to firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { instaId,
      email,
      number,
      genre,
      city,
      date,
      name,
      state,
      youtube,
      gender 
    } = userData;
    const res = await fetch(
      'https://socialpubli-7e6a6-default-rtdb.firebaseio.com/InfluencerData.json', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        instaId,
        email,
        number,
        city,
        date,
        state,
        name,
        genre,
        youtube,
        gender
      }),
    }
    );

    if (res) {
      alert("Data Stored")
    } else {
      alert("Please fill the Data")
    }
  };

  const [brandData, setbrandData] = useState({
    name: "",
    email: "",
    company: "",
    phone:"",
    genre:"",
    time:"",
    budget:""
  });

  let nm, vl;
  function postbrandData(event) {
    nm = event.target.name; 
    vl = event.target.value;
    console.log(name, value)
    if (name == 'genre') {
      let data = brandData.genre;
      let dataArr = data.split(",");
      let flag = false;
      for (let i = 0; i < dataArr.length; i++) { 
        if (dataArr[i] === value  ) {
          dataArr.splice(i, 1);
          flag = true;
          break;
        }
        
      }
      console.log(dataArr )
      if (flag === false) {
        let newgenre = data + ',' + value;
        setbrandData(
          {
            ...brandData,
            [name]: newgenre,

          }
        )
      }


    } else {
      setbrandData({ ...brandData, [nm]: vl })
    }
  }

  // connect to firebase
  const submitbrandData = async (event) => {
    event.preventDefault();
    const {
        name,
        email,
        company,
        phone,
        time,
        budget
    } = brandData;
    const res = await fetch(
      'https://socialpubli-7e6a6-default-rtdb.firebaseio.com/BrandData.json', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        company,
        phone,
        time,
        budget
      }),
    }
    );

    if (res) {
      alert("Data Stored")
    } else {
      alert("Please fill the Data")
    }
  };
  return (
    <div className="possible-container">
        <div className="two-section">
            <div className="row">
                <div className="col col-md-6 col-sm-6 influencer-tab">
                    <h3
                    className={toggleState === 1 ? "tabs1 active-tabs1" : "tabs1"}
                    onClick={() => toggleTab(1)}
                    >I am Influencer</h3>
                </div>
                <div className="col col-md-6 col-sm-6 brand-tab">
                    <h3
                    className={toggleState === 2 ? "tabs1 active-tabs1" : "tabs1"}
                    onClick={() => toggleTab(2)}
                    >I am Brand</h3>
                </div>

                <div className="possible-form">
                    <div className="col-md-12 col-sm-12">
                        <div className={toggleState === 1 ? "content1  active-content1" : "content1"}>

                        <div className="influencerPage-wrapper">
        <div className='infy-heading'>
          <h1>Become A FameTroop</h1>
          <p>To Become A Part of socialpubli FameTroop</p>
        </div>
        <div className="form-wrapper" method="POST">
        <div className="instaId">
            <input type="text" name='name' required value={userData.name} onChange={postUserData} />
            <label>Name<span>*</span></label>
          </div>
          <div className="instaId">
            <input type="text" name='instaId' required value={userData.instaId} onChange={postUserData} />
            <label>Insta-Id<span>*</span></label>
          </div>
          <div className="instaId">
            <input type="text" name='youtube' required value={userData.youtube} onChange={postUserData} />
            <label>Youtube<span></span></label>
          </div>
          <div className="instaId">
            <input type="text" name='email' required value={userData.email} onChange={postUserData} />
            <label>Email<span>*</span></label>
          </div>
          <div className="instaId">
            <input type="tel" name='number' required value={userData.number} onChange={postUserData} />
            <label>Contact No.<span>*</span></label>
          </div>
          <div className="instaId">
            <input type="date" name='date' required value={userData.date} onChange={postUserData} />
            <label>DOB<span>*</span></label>
          </div>
          <div className="instaId">
            <input type="text" name='gender' required value={userData.gender} onChange={postUserData} />
            <label>Gender<span></span></label>
          </div>
          <div className="instaId">
            <input type="text" name='city' required value={userData.city} onChange={postUserData} />
            <label>City<span>*</span></label>
          </div>
          <div className="instaId">
            <input type="text" name='state' required value={userData.state} onChange={postUserData} />
            <label>State<span>*</span></label>
          </div>
          <div className="genre" required >
            <h5>genre<span>*</span></h5>
            <div class="form-check checkbox">
              <input class="form-check-input" placeholder='Fashion' name='genre' type="checkbox" value='Fashion' onChange={postUserData} id="flexCheckDisabled" />
              <label class="form-check-label" for="flexCheckDisabled" >
                Fashion/Lifestyle
              </label>

            </div>
            <div class="form-check">
              <input class="form-check-input" placeholder='Beauty' name='genre' type="checkbox" value='Beauty' onChange={postUserData} id="flexCheckCheckedDisabled" />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
                Beauty
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" placeholder='Food' name='genre' type="checkbox" value='Food' onChange={postUserData} id="flexCheckCheckedDisabled" />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
                Food
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name='genre' type="checkbox" value='Travel' onChange={postUserData} id="flexCheckCheckedDisabled" />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
                Travel
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name='genre' type="checkbox" value='Fitness' onChange={postUserData} id="flexCheckCheckedDisabled" />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
                Fitness
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name='genre' type="checkbox" value='Tech' onChange={postUserData} id="flexCheckCheckedDisabled" />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
                Tech
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name='genre' type="checkbox" value='EdTech' onChange={postUserData} id="flexCheckCheckedDisabled" />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
                EdTech
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name='genre' type="checkbox" value='Parenting' onChange={postUserData} id="flexCheckCheckedDisabled" />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
                Parenting
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name='genre' type="checkbox" value='Finance' onChange={postUserData} id="flexCheckCheckedDisabled" />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
                Finance
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name='genre' type="checkbox" value='Gaming' onChange={postUserData} id="flexCheckCheckedDisabled" />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
                Gaming
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" name='genre' type="checkbox" value='Auto' onChange={postUserData} id="flexCheckCheckedDisabled" />
              <label class="form-check-label" for="flexCheckCheckedDisabled">
                Auto
              </label>
            </div>
            <button type="button" class="submit-button" onClick={submitData}>
              <Link className='submit-link' to='/influencerpage'  >Submit</Link>
            </button>
          </div>

        </div>
      </div>

	                    </div>
                        </div>

                        <div
                        className={toggleState === 2 ? "content1  active-content1" : "content1"}
                        >
                            
<div className="influencerPage-wrapper">
      <div className='infy-heading'>
        <h1>Connect with Influencers</h1>
        <p>Become A Part of socialpubli family</p>
      </div>
      <div className="form-wrapper" method="POST">
        <div className="instaId">
          <input type="text" name='name' required value={brandData.name} onChange={postbrandData} />
          <label>Name<span>*</span></label>
        </div>
        <div className="instaId">
          <input type="text" name='company' required value={brandData.company} onChange={postbrandData} />
          <label>Brand Name<span>*</span></label>
        </div>
        <div className="instaId">
          <input type="email" name='email' required value={brandData.email} onChange={postbrandData} />
          <label>Email<span>*</span></label>
        </div>
        <div className="instaId">
          <input type="number" name='phone' required value={brandData.phone} onChange={postbrandData} />
          <label>Mobile<span>*</span></label>
        </div>
        <div className="genre" required >
        <div className="campaign-time">
            <p>When would you like to launch the Campaign</p>
            <div class="form-check">
                <input class="form-check-input" name='time' value="Today" type="checkbox" onChange={postbrandData}  id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                Today
            </label>
        </div>
        <div class="form-check">
                <input class="form-check-input" name='time' value="This-Week" type="checkbox" onChange={postbrandData}  id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                This Week
            </label>
        </div>
        <div class="form-check">
                <input class="form-check-input" name='time' value="This-month" type="checkbox" onChange={postbrandData}  id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                This Month
            </label>
        </div>
        <div class="form-check">
                <input class="form-check-input" name='time' value="Not-decided" type="checkbox" onChange={postbrandData} id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                Not Yet Decided
            </label>
        </div>
            <p>What is the estimate of the budget</p>
            <div class="form-check">
                <input class="form-check-input" name='budget' type="checkbox" value="UNDER-10-LAKH" onChange={postbrandData} id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                Under 10 Lakh
            </label>
        </div>
        <div class="form-check">
                <input class="form-check-input" name='budget' type="checkbox" value="10LAKH-50lakh" onChange={postbrandData} id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                RS. 10 Lakh to Rs. 50 lakh
            </label>
        </div>
        <div class="form-check">
                <input class="form-check-input" name='budget' type="checkbox" value="50LAKH-1crore" onChange={postbrandData} id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                Rs. 50 lakh to Rs. 1 crore
            </label>
        </div>
        <div class="form-check">
                <input class="form-check-input" name='budget' type="checkbox" value="OVER-1-CRORE" onChange={postbrandData} id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                Over 1 crore
            </label>
        </div>
          
          <button type="button" class="submit-button"  onClick={submitbrandData}>
        <Link className='submit-link' to='/brandform' >Submit</Link>
        </button>
         
      </div>
    </div>
        </div>
        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Possible