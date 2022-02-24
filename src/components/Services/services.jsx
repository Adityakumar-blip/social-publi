import React, { Component } from "react";
import "./service.css";
import { Link } from "react-router-dom";
export default class influencer extends Component {
  render() {
    return (
      <>
      <div className="service-wrapper">
        <div className="about-service">
          <div className="service service-heading ">
            <h1 style={{ fontWeight: "bolder", color: "black" }}>
              We only do marketing that works.
            </h1>
          </div>
          <div className="service service-text ">
            <div>
              <h5
                style={{ fontWeight: "350", lineHeight: "2" }}
                className="texts"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit, laboriosam porro a eaque, inventore officia commodi
                blanditiis velit ab tempore maxime, sapiente quisquam iusto
                facilis repellendus adipisci vero? Cupiditate aliquid sed ipsum.
              </h5>
              <div className="lets-work">
                <Link
                  style={{
                    color: "#379BC1",
                    textDecoration: "none",
                    fontFamily: "poppins",
                  }}
                  to={"/contactus"}
                >
                  <h5> ➨ Work with Us</h5>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="service-container">
          <div>
            <div className="service-section black"> <h1> INFLUENCER MARKETING </h1></div>
            <div className="service-section grey"><h1> SOCIAL EXPERIMENTAL</h1></div>
            
          </div>
           <div style={{width:'100%' ,height:'6px' , backgroundColor:'#0E7895'}}></div>  
          <div>
          <div className="service-section middle"><h1> TRACKING & MEASUREMENT WITH INFLUSOFT™</h1></div>
          </div>
          <div style={{width:'100%' ,height:'6px' , backgroundColor:'#0E7895'}}></div>  
          <div>
            <div className="service-section grey"> <h1>CREATIVE&  CONTENT</h1></div>
            <div className="service-section black"><h1>PERFORMANCE MARKETING & MEDIA</h1></div>
            
          </div>

          <div>
            <div className="service-section black"><h1>STRATEGY</h1></div>
            <div className="service-section grey"><h1  >B2B</h1></div>
            
          </div>

        </div>
       <div className="brands-container">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">

    <h6>AS FEATURED IN</h6>
    <div className="carousel-item active">
      sgf
    </div>
    <div className="carousel-item">
      sdfgf
    </div>
    <div className="carousel-item">
       dfsgsfdg
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
      </>
    );
  }
}
