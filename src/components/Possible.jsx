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
    state:"",
    name:"",
    genre: ""

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
      name,
      state 
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
        state,
        name,
        genre,
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
      setbrandData({ ...brandData, [name]: value })
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
    } = userData;
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
            <input type="text" name='email' required value={userData.email} onChange={postUserData} />
            <label>Email<span>*</span></label>
          </div>
          <div className="instaId">
            <input type="number" name='number' required value={userData.number} onChange={postUserData} />
            <label>Contact No.<span>*</span></label>
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
            <button type="button" class="submit-button">
              <Link className='submit-link' to='/influencerpage' onClick={submitData} >Submit</Link>
            </button>
          </div>

        </div>
      </div>

	                    </div>
                        </div>

                        <div
                        className={toggleState === 2 ? "content1  active-content1" : "content1"}
                        >
                            <div class="wrapper">

{/* <!-- COMPANY INFORMATION --> */}
<div class="company-info">
    <h3>SocialPubli</h3>

    <ul>
        <li><i class="fa fa-road"></i>1007, One india bulls park, Jetalpur Road, Vadodara Gujarat</li>
        <li><i class="fa fa-phone"></i>9723232454</li>
        <li><i class="fa fa-envelope"></i>influencermarketing@socialpubli.co.in</li>
    </ul>
</div>
{/* <!-- End .company-info --> */}

{/* <!-- CONTACT FORM --> */}
<div class="contact">
    <h3>Get In Touch</h3>

    <form id="contact-form" method='POST'>

        <div className="touch-form">

        <p>
            <label>Name</label>
            <input className='input1' type="text" name="name" value={brandData.name} id="name" onChange={postbrandData} required/>
        </p>

        <p>
            <label>Company</label>
            <input className='input1' type="text" name="company" value={brandData.company} id="company" onChange={postbrandData}/>
        </p>

        </div>
        
        <div className="touch-form">
        <p>
            <label>E-mail Address</label>
            <input className='input1' type="email" name="email" value={brandData.email} id="email" onChange={postbrandData} required/>
        </p>

        <p>
            <label>Phone Number</label>
            <input className='input1' type="text" name="phone" value={brandData.phone} id="phone" onChange={postbrandData}/>
        </p>

        </div>

        <div className="row touch-form">
        <div className="col col-md-6 col-sm-6   campaign-div">
        <p>When do you want to launch the campaign :</p>
        <div class="form-check">
  <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Today
  </label>
</div>

<div class="form-check">
  <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault1">
    This Week
  </label>
</div>

<div class="form-check">
  <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
  <label class="form-check-label" for="flexRadioDefault1">
    This Month
  </label>
</div>

<div class="form-check">
  <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Not Yet Decided
  </label>
</div>
        
        </div>

        <div className=" col col-md-6 budget-div">
        <p>Tentative Budget :</p>
        <div class="form-check">
  <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault5"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Under Rs. 10 Lakhs
  </label>
</div>

<div class="form-check">
  <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault6"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Rs.10 Lakhs - 50 Lakhs
  </label>
</div>

<div class="form-check">
  <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault7"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Rs. 50 Lakhs - 1 Crore
  </label>
</div>

<div class="form-check">
  <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault8"/>
  <label class="form-check-label" for="flexRadioDefault1">
  Over Rs. 1 Crore
  </label>
</div>
        </div>

        

        </div>

        <p class="full">
            <button onClick={submitbrandData} type="submit">Submit</button>
        </p>

        

    </form>
    {/* <!-- End #contact-form --> */}
</div>
{/* <!-- End .contact --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Possible