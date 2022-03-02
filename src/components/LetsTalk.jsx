import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class LetsTalk extends Component {
  render() {
    return (
      <div>
         <div className="Lets-work-together">
           <Link to="/contactUs">
          <button className="btn  ">
            <h3 style={{ color: "white" }}>Let's Work Together ➨</h3>
          </button>
          </Link>
        </div>
      </div>
    )
  }
}
