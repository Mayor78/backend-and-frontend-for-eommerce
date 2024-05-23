import React, { useContext, useRef } from 'react';
import Slider from 'react-slick';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { IoStarSharp } from 'react-icons/io5';
import HomeContext from '../context/HomeContext';
import Cards from './Cards';
import "../style/new.css";
import "../style/Timer.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PRODUCTS } from './product';

const FlashsalesProduct = () => {
  const { addToCart } = useContext(HomeContext);
  const sliderRef = useRef();

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const fit={
    width: "20rem",
    height: "120px",
    object: "fit-cover"
  }
  return (
    <div>
      <div className="products-carousel mt-3">
        <div className="carousel-arrows d-flex justify-content-between">
          <GrPrevious onClick={prevSlide} />
          <GrNext onClick={nextSlide} />
        </div>
        <Slider ref={sliderRef} {...settings} className="slide">
          {PRODUCTS.map((product, index) => (
            <div key={index} className="card d-flex justify-content-between">
              <div>
                <img src={product.image} alt="" style={fit} className="img-fluid"/>
                 <h4 className="d-flex justify-content-center">{product.name}</h4>
                 <h5 className="d-flex justify-content-center"><bold>${product.price}</bold></h5>
                 <h6 className="text-danger d-flex justify-content-center"><strike >{product.oldprice}</strike></h6>
                 <p className="text-warning d-flex justify-content-center">{product.rating} <span className="text-black d-flex justify-content-center">{product.rate}</span></p>
              </div>
              {/* //   < picture={product.image}  name={product.name} 
              // price={product.price} /> */}
              
              <button className='btn btn-primary ' onClick={() => addToCart(product.id)}>Add to Cart</button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FlashsalesProduct;
