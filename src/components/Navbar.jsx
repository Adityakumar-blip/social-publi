import React, {useState} from 'react';
import './Navbar.css';
import brand from './image/png-logo.png';
import {Link} from 'react-router-dom';



const Navbar = () =>{

    const [show, setShow] = useState(false);
    return(
        <>
        <section style={{position:'sticky' ,top:'0',zIndex:'101'}}>
    <div  className='nav-wrapper container-fluid nav-bg  '>
            <div className='row'>
        <nav className=" navbar nav-container navbar-expand-lg navbar-light nav-cont  ">
            <div className="container-fluid logo-cont">
                <Link className="navbar-brand" to="/">
                <img src={brand} alt=".."/>
                </Link>
                    <button className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    onClick={() => setShow(!show)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className={`collapse navbar-collapse ${show ? "show" : ""}`} 
                id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu"/>
                        <li className="nav-item">
                        <Link className="nav-link active" 
                        aria-current="page" 
                        to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/services">Services</Link>
                        </li>


                        <li className="nav-item">
                        <Link className="nav-link active" to="/influencer">Work</Link>
                        </li>

                        
                        <li className="nav-item">
                        <Link className="nav-link active" to="/Brands" >Brands</Link>
                        </li>

                        
                        <li className="nav-item">
                        <Link className="nav-link active" to="/tools" >Tools</Link>
                        </li>

                        <li className="nav-item">
                        <Link className="nav-link active" to="/About">About</Link>
                        </li>

                        <button type="button" className="contact-button">
                            <Link className='nav-link' to='/contactus'>Contact Us</Link>
                        
                        </button>
                </div>
            </div>
        </nav>

            </div>
        </div>
        </section>
        </>

    );
};

export default Navbar;