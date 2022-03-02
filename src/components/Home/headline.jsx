import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./headline.css";

export default class headline extends Component {
  render() {
    return (
      <>
        <div className="headLine-container">
          <div className="headLines">
             <a href="" className="headline"> INFLUENCER MARKETING </a>
             <a href="" className="headline"> SOCIAL EXPERIENTIAL  </a>
             <a href="" className="headline"> PERFORMANCE MARKETING & MEDIA </a>
             <a href="" className="headline"> CREATIVE & CONTENT </a>
             <a href="" className="headline"> TRACKING & MEASUREMENT WITH INFLUSOFT  </a>
             <a href="" className="headline"> STRATEGY   </a>
             <a href="" className="headline"> VIEW ALL...  </a>
          </div>
        </div>
      </>
    );
  }
}
