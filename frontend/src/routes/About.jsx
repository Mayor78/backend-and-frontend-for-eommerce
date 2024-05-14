import React from 'react';
import  { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import 'slick-carousel/slick/slick-theme.css';
import women from  "../assets/women.png";
import '../style/About.css'
import { GiGreenhouse } from "react-icons/gi";
import { AiOutlineDollar } from "react-icons/ai";
import { GiShoppingBag } from "react-icons/gi";
import { FaSackDollar } from "react-icons/fa6";
import Emma from '../assets/Emma.png';
import Tom from '../assets/Tom.png';
import will from '../assets/willSmith.png';
import mayor from "../assets/mayor.jpg"
import mayorr from "../assets/mayorr.jpg"
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import CombineIcon from "../product/CombineIcon"




const About = () => {
 


  const size={
    width: '3rem',
    height: '4rem',
    
  }
  const found={
    width:"12rem",
    height:"12rem",
    margin: '0 auto',
    padding: '0.5rem',
    // borderRadius: '50%',
    // border: '1px solid #000'
  }
  const sliderRef = useRef();

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  // This is for sliding image
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  const founders = [
    {
      name: 'Emma Watson',
      image: Emma,
      position: 'Accountant',
    },
    {
      name: 'Will Smith',
      image: will,
      position: 'Managing Director',
    },
    {
      name: 'Tom Cruise',
      image: Tom,
      position: 'Head Of Department',
    },
    {
      name: 'Abraham mayowa',
      image: mayor,
      position: 'Developer',
    },
    {
      name: 'Mayowa Abraham',
      image: mayorr,
      position: 'Owner',
    },
    // Add more founder data as needed
  ];
  return (
    <div>
      <div className='d-md-flex'>

        {/* Image column: on small screens, it's full width; on larger screens, it's 50% width */}
        <div className='text mx-3 mt-5 mb-3'>
          <img src={women} alt="" className='img-fluid img-top' />
        </div>

        {/* Text column: on small screens, it's full width; on larger screens, it's 50% width */}
        <div className='text mx-3 mt-5'>
          <h1>Our Story</h1>
          <p className='text-break'>Launched in 2015, Exclusive is South Asia’s premier online 
                                    shopping marketplace with an active presence in Bangladesh. 
                                    Supported by a wide range of tailored marketing, data, and 
                                    service solutions, Exclusive has 10,500 sellers and 300 brands 
                                    and serves 3 million customers across the region.</p>
          <br />
          <p className='text-break'>Exclusive has more than 1 million products to offer,
                                    growing at a very fast. Exclusive offers a diverse assortment in 
                                    categories ranging from consumer.</p>
        </div>

      </div>

      <div className='d-md-flex icon-section align-item-center justify-content-center'>
          <div className='border m-3 p-3 iconback'>
            <GiGreenhouse className='icon bg-black text-white rounded-circle mx-5 p-2' style={size} />
            <h2 className='lh-1 fs-5 mx-3 textt'>10.5K </h2>
              <p className='lh-1 fs-6 mx-2'>Sellers activate our site</p>

          </div> 
          <div className='border m-3 p-3 iconback'>
            <AiOutlineDollar className='icon bg-black text-white rounded-circle mx-5 p-2' style={size} />
            <h2 className='lh-1 fs-5 mx-3 textt'>33k </h2>
              <p className='lh-1 fs-6 mx-2'>Monthly Produduct Sale</p>

          </div>
          <div className='border m-3 p-3 iconback'>
            <GiShoppingBag className='icon bg-black text-white rounded-circle mx-5 p-2' style={size} />
            <h2 className='lh-1 fs-5 mx-3 textt '>45.5k</h2>
              <p className='lh-1 fs-6 mx-2'>Customer active in our site </p>

          </div>
          <div className='border m-3 p-3 iconback'>
            <FaSackDollar className='icon bg-black text-white rounded-circle mx-5 p-2' style={size} />
            <h2 className='lh-1 fs-5 mx-3 textt'>25k</h2>
              <p className='lh-1 fs-6 mx-2'>Annual gross sale in our site</p>

          </div>
      </div>


              {/* founder section */}


              


      <div className="founder-carousel">
      <div className="carousel-arrows d-flex justify-content-between">
                      
                      <GrPrevious onClick={prevSlide} />
                        <GrNext onClick={nextSlide} />
                  </div>
                  
        <Slider  ref={sliderRef} {...settings}>
          {founders.map((founder, index) => (
            <div key={index} className="card">
              <img src={founder.image} alt={founder.name} style={found} className='img-fluid'/>
             
              <h3 className="text-center ">{founder.name}</h3>
              <p className='d-flex justify-content-evenly'>{founder.position} </p>
              <div className='icon d-flex justify-content-evenly'>
                <div className='ic1'>
                    <FiTwitter /> 
                </div>
                <div className='ic2'>
                    <FaInstagram />
                </div>
                <div className='ic3'>
                    <CiLinkedin />
  
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
            
                <CombineIcon  />
           
     
    </div>
  );
};

export default About;








