import React from 'react';
 import img1 from '../image/car1.jpg'
import img2 from '../image/car2.jpg'
import img3 from '../image/car3.jpg'
import './Carousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from 'react-reveal/Zoom'

export default class extends React.Component {
  render() {

    // const setting = {
      
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   autoplay:true,
    //     autoplaySpeed:2000,
    //   accessibility:true,
     
    // };

    return (
      <>
      <section>
    
      <div className="campaign">
          <h1>Our Work In Action</h1>
          <p>80+ leading brands & their agencies leverage our influencer network across the marketing cycle – for research, sampling, content creation & distribution, driving engagement & conversions, at scale.</p>
          <div className="campaign-container">
          <div class="card campaign-card"  >
            <img src={img1} class="card-img-top campaign-img" alt="..."/>
            <div class="card-body wrap">
            <p class="campaign-text">Campaign 1</p>
          </div>
            <p className='card-info'></p>
          </div>
          <div class="card campaign-card"  >
            <img src={img2} class="card-img-top campaign-img" alt="..."/>
            <div class="card-body wrap">
            <p class="campaign-text">Campaign 2</p>
          </div>
            <p className='card-info'></p>
          </div>
          <div class="card campaign-card"  >
            <img src={img3} class="card-img-top campaign-img" alt="..."/>
            <div class="card-body wrap">
            <p class="campaign-text">Campaign 3</p>
          </div>
            <p className='card-info'></p>
          </div>
          </div>
        </div>


  {/* <Zoom>
  <div className="carousel-inner">

    
    <Slider  {...setting}>
      <div>
    <div className="carousel-items  ">
      <img src={img1} class="  car" alt="..."/>
      <div className="carousel-captions ">
        <h3>The Man Company</h3>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div> </div>
    <div>      
    <div className="carousel-items">
      <img src={img2} className="  car" alt="..."/>
      <div class="carousel-captions ">
        <h3>NYKAA</h3>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div></div>
    <div>
    <div className="carousel-items">
      <img src={img3} className="  car" alt="..."/>
      <div className="carousel-captions ">
        <h3>AMAZON</h3>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div></div>
    </Slider>

   
</div>
</Zoom> */}
</section>
</>
    );
  }
}