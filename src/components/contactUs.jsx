import React, { Component } from "react";

import "./contactus.css";
export default class contactUs extends Component {
  render() {
    return (
      <>
        <div className="row contactUs-container">
          <div className=" col col-sm-12 otherOptionsToConnect">
            <div>
              {" "}
              <h1 style={{color:'#ffff62'}} >Contact Us</h1>
            </div>
            <div>
              <p  >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam deleniti, vero, eius tempore doloremque exercitationem
                nihil dolores quidem reprehenderit perspiciatis nisi et?
                Adipisci minima sunt quia 
              </p>
            </div>
            <div>
              <h2>+91 9804340458</h2>
            </div>
            <div>
              <a href="http://www.google.com">
                <i style={{color:'white'}} className="fas fa-mail-bulk fa-4x"></i>
              </a>
            </div>
          </div>
          <div className="col col-sm-12 form-container">
            <form action="">
              <div className="leftRight">
                <div className="left">
                  <div className="firstName">
                    <h6>First Name *</h6>

                    <input
                      spellCheck="false"
                      type="text"
                      name="fName"
                      id="fName"
                    />
                  </div>
                  <div className="Email">
                    <h6>Email *</h6>
                    <input type="email" name="Email" id="Email" />
                  </div>
                  <div className="title">
                    <h6>Title</h6>
                    <input
                      spellCheck="false"
                      type="text "
                      name="Title"
                      id="Title"
                    />
                  </div>
                </div>

                <div className="right">
                  <div className="lastName">
                    <h6>Last Name</h6>
                    <input
                      spellCheck="false"
                      type="text"
                      name="lName"
                      id="lName"
                    />
                  </div>
                  <div className="Phone">
                    <h6>Phone Number *</h6>
                    <input type="number" name="PhoneNumber" id="PhoneNumber" />
                  </div>
                  <div className="location">
                    <h6>Location</h6>
                    <input
                      spellCheck="false"
                      type="text"
                      name="Location"
                      id="Location"
                    />
                  </div>
                </div>
              </div>

              <div className="company">
                <h6>Company Name</h6>
                <input
                  spellCheck="false"
                  type="text"
                  name="companyName"
                  id="companyName"
                />
              </div>

              <div className="TextPlace">
                <h6>Tell Me something about yourself *</h6>
                <textarea
                  name="TellMe"
                  id="TellMe"
                  cols="30"
                  rows="10"
                  spellCheck="false"
                ></textarea>
              </div>

              <br />
              <button className="submitbtn btn btn-dark " type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
