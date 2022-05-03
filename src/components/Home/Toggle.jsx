import React, {useState} from 'react'
import './Toggle.css'
import { Link } from 'react-router-dom';

const Toggle = () => {


    const data =[
        {
            id: "Toggle1",
            title:"Marketing Services",
            text1:"Influencer Marketing",
            para1:"Data-driven Creator campaigns drive measurable growth",
            text2:"Paid & Performance Media",
            para2:"Integrated strategies that maximizes your media spend",
            text3:"Creative services & content Marketing",
            para3:"Full-service content creation, distribution and monetization",
            text4:"Blockchain / Web3",
            para4:"Web3, cryptoasset, and NFT services for brand and creators",
            testimonial:"`Socialpubli is best platform for influencer marketing, they have the best in class technologies and also having industry's best brains. They are best at there work marketing is based on their data driven methods which leads to the higher ROI``"
        },
        {
            id:"Toggle2",
            title:"Talent Services",
            text1:"Influence talent agency",
            para1:"Full Service creator management and brand partnerships",
            text2:"Athlete talent agency",
            para2:"Unbeatable sports marketing and media for atheletes and brands",
            testimonial:""
        },
        {
            id:"Toggle3",
            title:"Platforms & Tech",
            text1:"Socialsoft",
            para1:"End to end campaign and talent management platform",
            text2:"SP Secure",
            para2:"Social Media profile history analysis and monitoring",
            testimonial:" "
        }
    ];

    const [toggled, setToggled] = useState();

  return (

    <div className='toggle-wrapper'>
              <h1>Global ​​AI-powered​ services and technologies</h1>
        <div className='row toggle-landing '>
          <div className='toggle-container'>
            <div className='row g-0'>
              <div className='col-md-4 col-sm-12'>
                <div className='toggle-title'>
                  {
                      data.map(({title , id}) => {
                          return(
                            <ul>
                            <li
                                onClick={() => setToggled(id)}
                            >{title}</li>
                        </ul>
                          )
                      })
                  }
                </div>
              </div>
              <div className='col-md-4 col-sm-12'>
                <div className='toggle-text'>
                 {
                     data.map(({text1,text2,text3,text4,para1,para2,para3,para4, id}) => {
                         return(
                             <>

                            {toggled === id ? (

                            
                                <>
                                <h3><Link to="/marketing" style={{textDecoration:"none", color:"black"}} >{text1}</Link></h3>
                                <p style={{fontWeight:"500"}} >{para1}</p>
                                <h3>{text2}</h3>
                                <p style={{fontWeight:"500"}}>{para2}</p>
                                <h3>{text3}</h3>
                                <p style={{fontWeight:"500"}}>{para3}</p>
                                <h3>{text4}</h3>
                                <p style={{fontWeight:"500"}}>{para4}</p>
                                </>
                            ): (
                              null
                            )
                            }
                            </>
                         )
                     })
                 }
                
                </div>
              </div>

              <div className='col-md-4 col-sm-12'>
                <div className='toggle-testimonial'>
                  {
                      data.map(({testimonial}) => {
                          return(
                              <h4>{testimonial}</h4>
                          )
                      })
                  }
                
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Toggle