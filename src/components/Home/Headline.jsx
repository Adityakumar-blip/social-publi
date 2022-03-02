import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./headline.css";

export default class headline extends Component {
  render() {
    return (
      <>
        <div className="headLine-container">
          <div className="headLines">
             <Link to='/services' className="headline"> INFLUENCER MARKETING </Link>
             <Link to='/services' className="headline"> SOCIAL EXPERIENTIAL  </Link>
             <Link to='/services' className="headline"> PERFORMANCE MARKETING & MEDIA </Link>
             <Link to='/services' className="headline"> CREATIVE & CONTENT </Link>
             <Link to='/services' className="headline"> TRACKING & MEASUREMENT WITH INFLUSOFT  </Link>
             <Link to='/services' className="headline"> STRATEGY   </Link>
             <Link to='/services' className="headline"> VIEW ALL...  </Link>
          </div>
        </div>
      </>
    );
  }
}
