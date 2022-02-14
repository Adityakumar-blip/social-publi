import React, {useState} from 'react';
import './Navbar.css';
import brand from './image/brandlogo.png';
import {Link} from 'react-router-dom';



const Navbar = () =>{

    const [show, setShow] = useState(false);
    return(
        <>
        <section>
    <div className='nav-wrapper container-fluid nav-bg '>
            <div className='row'>
        <nav className=" navbar nav-container navbar-expand-lg navbar-light  ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img src={brand} alt=".."/>
                </a>
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
                        <Link className="nav-link active" to="/influencer">Influencers</Link>
                        </li>

                        
                        <li className="nav-item">
                        <Link className="nav-link active" to="/Brands" >Brands</Link>
                        </li>

                        
                        <li className="nav-item">
                        <Link className="nav-link active" to="/tools" >Tools</Link>
                        </li>

                        
                        <li className="nav-item">
                        <Link className="nav-link active" to="/services">Our Work</Link>
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