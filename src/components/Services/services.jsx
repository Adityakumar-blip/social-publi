import React, { Component } from "react";
import "./service.css";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Zoom'
import Zoom from 'react-reveal/Fade'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class influencer extends Component {
  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay:true,
        autoplaySpeed:2500,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <>
        <div id="Service" className="service-wrapper">
          <div className="about-service">
            <div className="service service-heading ">
              <Fade left>
                <h1 style={{ fontWeight: "bolder", color: "black" }}>
                  We only do marketing that works.
                </h1>
              </Fade>
            </div>
            <div className="service service-text ">
              <Fade right cascade>
                <div>
                  <h5
                    style={{ fontWeight: "350", lineHeight: "2" }}
                    className="texts"
                  >
                    Our talented team is responsible for having created some of the most viral and successful campaigns for our clients globally. We continually aim to exceed expectations, make lasting memories, and amplify brands to their highest potential. Our marketing mix only contains services with proven ROI, backed by analytics.
                  </h5>
                  <div className="lets-work">
                    <Link

                    to="/contactus"
                      style={{
                        color: "#379BC1",
                        textDecoration: "none",
                        fontFamily: "poppins",
                      }}
                    >
                      <h5> ➨ Work with Us</h5>{" "}
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <Zoom bottom cascade style={{ height: 'fit-content' }} >
            <div className="service-container">
              <div className="double-container">
              <div className="service-section black"><Link to="/marketing" > <h1 > INFLUENCER MARKETING </h1></Link></div>
                <div className="service-section grey"><h1> SOCIAL EXPERIMENTAL</h1></div>

              </div>


              <div style={{ width: '100%', height: '6px', backgroundColor: '#0E7895' }}></div>
              <div className=" single-container">
                <div className="service-section middle"><h1> TRACKING & MEASUREMENT WITH INFLUSOFT™</h1></div>
              </div>
              <div style={{ width: '100%', height: '6px', backgroundColor: '#0E7895' }}></div>


              <div className="double-container">
                <div className="service-section grey"> <h1>CREATIVE&  CONTENT</h1></div>
                <div className="service-section black"><h1>PERFORMANCE MARKETING & MEDIA</h1></div>

              </div>

              <div className="double-container">
                <div className="service-section black"><h1>STRATEGY</h1></div>
                <div className="service-section grey">  <h1 className="service-lk"><Link to="/B2c">B2B</Link></h1></div>

              </div>

            </div>
          </Zoom>

        </div>

        <div className="brands-featured-container">
          <div className="heading">
            <div> </div>
            <p>AS FEATURED IN</p>
          </div>
          <div className="brands-container">
            <Slider {...settings}>
              <div>
                <div className="brand-img">
                  <img src="https://www.viralnation.com/wp-content/uploads/2020/03/800px-CNN.svg.png" alt="" />
                </div>
              </div>
              <div>
                <div className="brand-img">
                  <img src="https://www.viralnation.com/wp-content/uploads/2020/03/yahoo-logo-e1583476551678.png" alt="" />
                </div>
              </div>
              <div>
                <div className="brand-img">
                  <img src="https://www.viralnation.com/wp-content/uploads/2020/03/8d86cb227cc17b358ba41fe1ba53d2c0.png" alt="" />
                </div>
              </div>
              <div>
                <div className="brand-img">
                  <img src="https://www.viralnation.com/wp-content/uploads/2020/03/Screen-Shot-2020-03-06-at-12.34.07-AM.png" alt="" />
                </div>
              </div>
              <div>
                <div className="brand-img">
                  <img src="https://www.viralnation.com/wp-content/uploads/2020/03/570961NBC_News_new_logo.png" alt="" />
                </div>
              </div>
              <div>
                <div className="brand-img">
                  <img src="https://www.viralnation.com/wp-content/uploads/2020/03/15601856872_0d92fd4fec_b.jpg" alt="" />
                </div>
              </div>
              <div>
                <div className="brand-img">
                  <img src="https://www.viralnation.com/wp-content/uploads/2020/03/1200px-Business_Insider_Logo.svg-e1583476585198.png" alt="" />
                </div>
              </div>
              <div>
                <div className="brand-img">
                  <img src="https://www.viralnation.com/wp-content/uploads/2020/03/mtc-logo-2019.png" alt="" />
                </div>
              </div>
            </Slider>
          </div>
        </div>

      </>
    );
  }
}
