import React from 'react';
import c1 from '../image/logo1.png';
import c2 from '../image/logo2.png';
import c3 from '../image/logo3.png';
import c4 from '../image/logo4.png';
import './Clients.css';
import Zoom from 'react-reveal/Zoom'

const Clients = () => {
  return (
    <>
          <section id="clients" class="section-bg">
            <div className="container">
              <div className="section-header">
                <h2>Our Clients</h2>
                <p>Meet our happy clients</p>
              </div>
              <Zoom cascade>
              <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-6">
                  <div className="client-logo"><img src={c1} alt="logo1" className="client1"/></div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-6">
                  <div className="client-logo"><img src={c2} alt="logo1" className="client1"/></div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-6">
                  <div className="client-logo"><img src={c3} alt="logo1" className="client1"/></div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-6">
                  <div className="client-logo"><img src={c4} alt="logo1" className="client1"/></div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-6">
                  <div className="client-logo"><img src={c1} alt="logo1" className="client1"/></div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-6">
                  <div className="client-logo"><img src={c2} alt="logo1" className="client1"/></div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-6">
                  <div className="client-logo"><img src={c3} alt="logo1" className="client1"/></div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xm-6">
                  <div className="client-logo"><img src={c4} alt="logo1" className="client1"/></div>
                </div>
                </div>
                </Zoom>
            </div>
          </section>
    </>
  );
};

export default Clients;
