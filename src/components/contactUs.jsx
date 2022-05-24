import React, {useState} from 'react'
import Form from './Form1.jsx'
import './contactus.css'

const ContactUs = () => {

  const [active, setactive] = useState();

  const [userData, setUserData] = useState({
    name:"",
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
      email,
      number,
      message,} = userData;
      const res = await fetch(
        'https://socialpubli-7e6a6-default-rtdb.firebaseio.com/Contactus.json',{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            name,
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
    <section>
        <div className="Indigo">
          <div className="Indigo-container">
          <div className='row g-0 Red-box'>
              <div className='col-md-5 col-sm-12'>
              <div className='Indigo-body'>
                  
                  <h1>Let's Connect</h1>
                  <p>We are a collective of multi-disciplinary digital natives,all working together as one, to propel your brand online.</p>
                
                </div>
              </div>
              <div className='col-md-7 col-sm-12'>
                <div className='Indigo-img'>
                    <img src="https://images.unsplash.com/photo-1569617084133-26942bb441f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHlvdXRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='Red' />
                </div>
              </div>
              </div>
          </div>
        </div>
      </section>

      <section className='form-container'>
      <div class="container ">
	<div class="row form-heading">
			<h1>contact us</h1>
	</div>
	<div class="row">
			<h4 style={{textAlign:"center"}}>We'd love to hear from you!</h4>
	</div>
	<div class="row input-container" method="POST">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" name='name' value={userData.name} onChange={postUserData} required />
					<label>Name</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input">
					<input type="text" name='email' value={userData.email} onChange={postUserData} required />
					<label>Email</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input" style={{float:"right"}}>
					<input type="text" name='number' value={userData.number} onChange={postUserData} required />
					<label>Phone Number</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea name='message' value={userData.message} onChange={postUserData} required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="btn-lrg submit-btn" onClick={submitData}>Send Message</div>
			</div>
	</div>
</div>

      </section>

         
        {/* <div className="row contactUs-container">
            
          
          <div class="col col-lg-3 col-md-6 col-xm-12 col-sm-6">
            <div className="contact-type">
              <h1>I am  </h1>
              <h1> <strong> Brand</strong></h1>
              <button>
                <Link to='/brandform' >Connect</Link>
              </button>
            </div>
           </div>
          <div class="col col-lg-3 col-md-6 col-xm-12 col-sm-6">
            <div className="contact-type">
              <h1>I am  </h1>
              <h1> <strong>Influencer</strong></h1>
              <button>
                <Link to='/influencerpage' > Connect</Link>
              </button>
            </div>

          </div>
          <div className=" col col-lg-6 col-md-6 col-xm-12 col-sm-12 otherOptionsToConnect">

            <div className="text-cont">
              <div>
                {" "}
                <h1 className="contactuss" >Contact Us</h1>
              </div>
             
              <div>
                <p style={{fontSize:'2rem'}} >
                   While we're good with smoke signals, there are simpler ways for us to get in touch.
                </p>
              </div>
              <div>
               <a style={{textDecoration:'none', color:'white'}} href="https://wa.me/919723232454?text=hi"> <h2>+91 9723232454</h2></a>
              </div>
              <div>
                <a className="contact-email" style={{textDecoration:'none' , color:'white', fontSize:'1.2rem'}} href="mailto: influencermarketing@soicalpubli.co.in?subject = Feedback&body = Message">
                 
                    influencermarketing@soicalpubli.co.in
                </a>
               
              </div>
            </div>
          </div>
</div> */}
        </>
  )
}

export default ContactUs