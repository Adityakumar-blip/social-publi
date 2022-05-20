import React from 'react';
 import img1 from '../image/1.jpg'
import img2 from '../image/2.jpg'
import img3 from '../image/3.jpg'
import img4 from '../image/4.jpg'
import img5 from '../image/5.jpg'
import './Carousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from 'react-reveal/Zoom'

export default class extends React.Component {
  render() {

    const setting = {
      
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay:true,
        autoplaySpeed:2000,
      accessibility:true,
     
    };

    return (
      <>
      <section>
    
      <div className="campaign">
          <h1>Our Work In Action</h1>
          <p>80+ leading brands & their agencies leverage our influencer network across the marketing cycle – for research, sampling, content creation & distribution, driving engagement & conversions, at scale.</p>
          <div className="campaign-container">
          <div>
        <Slider {...setting}>
          <div className='campaign-img'>
            <img src={img1} alt="img1" />
          </div>
          <div className='campaign-img'>
            <img src={img2} alt="img1" />
          </div>
          <div className='campaign-img'>
            <img src={img3} alt="img1" />
          </div>
          <div className='campaign-img'>
            <img src={img4} alt="img1" />
          </div>
          <div className='campaign-img'>
            <img src={img5} alt="img1" />
          </div>
        </Slider>
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