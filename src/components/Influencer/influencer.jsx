import React, { Component } from "react";
import "./influencer.css";
import { RestData, workData } from "./workData";
import {Link} from 'react-router-dom';

function TestimonialCol(props) {
  return (
    <>
      {props.Id % 2 === 0 ? (
        <div id="1" className="testimonial-row brighten">
          <div id="0" className="testimonial-col zero">
            <div className="big-influencer">
              <Link  to={workData[props.Id][0].link} className="  influencer">
                <img src={workData[props.Id][0].imgLink} alt="" srcSet="" />
              </Link>
              <h5 className="influencer-title">
                {workData[props.Id][0].influencerTitle}
                <br />➨
              </h5>
            </div>
          </div>
          <div id="1" className="testimonial-col one">
            <div className="small-influencer">
              <a href={workData[props.Id][1].link} className=" influencer">
                <img src={workData[props.Id][1].imgLink} alt="" srcSet="" />
              </a>
              <h5 className="influencer-title">
                {workData[props.Id][1].influencerTitle}
                <br />➨
              </h5>
            </div>
            <div id="2" className="small-influencer">
              <a href={workData[props.Id][2].link} className=" influencer">
                <img src={workData[props.Id][2].imgLink} alt="" srcSet="" />
              </a>
              <h5 className="influencer-title">
                {workData[props.Id][2].influencerTitle}
                <br />➨
              </h5>
            </div>
          </div>
        </div>
      ) : (
        <div id="1" className="testimonial-row brighten">
          <div id="2" className="testimonial-col">
            <div className="small-influencer">
              <a href={workData[props.Id][1].link} className=" influencer">
                <img src={workData[props.Id][1].imgLink} alt="" srcSet="" />
              </a>
              <h5 className="influencer-title">
                {workData[props.Id][1].influencerTitle}
                <br />➨
              </h5>
            </div>
            <div id="1" className="small-influencer">
              <a href={workData[props.Id][2].link} className=" influencer">
                <img src={workData[props.Id][2].imgLink} alt="" srcSet="" />
              </a>
              <h5 className="influencer-title">
                {workData[props.Id][2].influencerTitle}
                <br />➨
              </h5>
            </div>
          </div>
          <div id="0" className="testimonial-col">
            <div className="big-influencer">
              <a href={workData[props.Id][0].link} className="  influencer">
                <img src={workData[props.Id][0].imgLink} alt="" srcSet="" />
              </a>
              <h5 className="influencer-title">
                {workData[props.Id][0].influencerTitle}
                <br />➨
              </h5>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default class work extends Component {
  constructor() {
    super();
    this.state = {
      id: workData.length-1,
      LoadMorebackgroundColor:'white',
      LoadLessbackgroundColor:'white'
    };
  }
  AddData = () => {
    let ID = this.state.id;
    console.log(ID);
    if(ID<RestData.length-1){
    let testimonialRow = RestData[ID + 1];
    workData.push(testimonialRow);
    this.setState({
     
      id: ID + 1,
     LoadLessbackgroundColor:'white'
    });
  }
  else{
    this.setState({
       
      LoadMorebackgroundColor:'grey'
    })
  }
     
  }; 
  deleteData=()=>{
    let ID =this.state.id;
    if(ID>0){
      workData.pop();
      this.setState({
        id:ID-1,
        LoadMorebackgroundColor:'white'
      })
    }
    else{
      this.setState({
        
        LoadLessbackgroundColor:'grey'
     })
    }
  }

  render() {
    return (
      <>
        <div className="text-container row ">
          <div className="col-lg-6 col-sm-12 text big-heading">
            <h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              rerum dignissimos s consectetur adipisicing eli
            </h1>
          </div>
          <div className="col-lg-6 col-sm-12 text small-heading">
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              eveniet aliquid facilis soluta totam laborum assumenda. Soluta
              doloribus quam explicabo dolorum iusto ut, architecto labore
              debitis cum libero expedita consequuntur?
            </h6>
          </div>
        </div>

        <div className="testimonial-container">
          {workData.map((row) => (
            <TestimonialCol Id={row[0].id}
             />
          ))}
        </div>

        <div className="button-wrapper">
          <div onClick={this.deleteData} className="show-less">
            <button className="load-more-btn  " style={{backgroundColor:this.state.LoadLessbackgroundColor}} > Show Less</button>{" "}
          </div>
          <div className="show-more"  >
            <button onClick={this.AddData} className="load-more-btn  " style={{backgroundColor:this.state.LoadMorebackgroundColor}}>
              {" "}
              Show More
            </button>{" "}
          </div>
        </div>
       
        
      </>
    );
  }
}
