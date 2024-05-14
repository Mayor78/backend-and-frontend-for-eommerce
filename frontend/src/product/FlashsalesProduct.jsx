// import React, { useState, useEffect } from 'react';
// import Cards from './Cards';
// import "../style/new.css"
// import "../style/Timer.css"
// import { IoStarSharp } from "react-icons/io5";
// import  { useRef } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import { GrNext } from "react-icons/gr";
// import { GrPrevious } from "react-icons/gr";
// import 'slick-carousel/slick/slick-theme.css';

// const FlashsalesProduct = () => {
//     const game = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/28/3643201/1.jpg?1586';
//     const laptop = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/5541121/1.jpg?0273";
//     const Headphones = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/53/1319752/1.jpg?3751";
//     const Smartphone = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/5829252/1.jpg?9789";
//     const picture6 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/90/2822112/1.jpg?2536";
//     const Smartwatch = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/16/1393461/1.jpg?8770";
//     const Handbag ='https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/45/014127/1.jpg?2075';
//     const CropTop = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/91/1072332/1.jpg?5275'
//     const Shoes = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/74/785559/1.jpg?9996'

//     // Array to store 5 copies of the icon
//     const stars = new Array(5).fill(<IoStarSharp />);

//     const [showRestImages, setShowRestImages] = useState(false);
//     const [showMore, setShowMore] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             const lastImage = document.getElementById('lastImage');
//             if (lastImage) {
//                 const lastImageBounding = lastImage.getBoundingClientRect();
//                 if (lastImageBounding.bottom <= window.innerHeight) {
//                     // Show the rest of the images
//                     setShowRestImages(true);
//                 }
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const toggleShowMore = () => {
//         setShowMore(!showMore);
//     };




//     const stylebtn ={
//         width: '5rem',
       
//      }

//     const found={
//         width:"12rem",
//         height:"12rem",
//         margin: '0 auto',
//         padding: '0.5rem',
//         // borderRadius: '50%',
//         // border: '1px solid #000'
//       }
//       const slide={
//         width:"30rem",
//         height:"10rem",
//         margin: '0 auto',
//         padding: '0.5rem',
        
//         // borderRadius: '50%',
//         // border: '1px solid #000'

//       }
//       const sliderRef = useRef();
    
//       const nextSlide = () => {
//         sliderRef.current.slickNext();
//       };
    
//       const prevSlide = () => {
//         sliderRef.current.slickPrev();
//       };
    
//       // This is for sliding image
//       const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: [
//           {
//             breakpoint: 768, // Adjust this breakpoint as needed
//             settings: {
//               slidesToShow: 2,
//             }
//           },
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//             }
//           }
//         ]
//       };
    
//       const products = [
//         {
//           name: 'Game',
//           image: game,
//           price: '$500',
//           rating: stars,
//           oldprice: "$677",
//           num:"(90)"
//         },
//         {
//             name: 'Game',
//             image: game,
//             price: '$500',
//             rating: stars,
//             oldprice: "$677",
//             num:"(90)"
//         },
//         {
//             name: 'Game',
//           image: game,
//           price: '$500',
//           rating: stars,
//           oldprice: "$677",
//           num:"(90)"
//         },
//         // Add more founder data as needed
//       ];

//     return (
//         <div>
//              <div className="products-carousel">
//                   <div className="carousel-arrows d-flex justify-content-between">
                      
//                       <GrPrevious onClick={prevSlide} />
//                         <GrNext onClick={nextSlide} />
//                   </div>
                  
//                    <Slider  ref={sliderRef} {...settings} >
//                         {products.map((products, index) => (
//                         <div key={index} className="card d-flex justify-content-between">
//                         <img src={products.image} alt={products.name} style={found} className='img-fluid'/>
                        
//                         <h3 className="text-center ">{products.name}</h3>
//                         <h3 className='d-flex justify-content-evenly text-danger'>{products.price} <span><h6 className='text-dark'><strike>{products.oldprice}</strike></h6></span> </h3>
//                         <p className='d-flex justify-content-evenly fs-6 text-warning'>{products.rating} </p>
//                         <p className='d-flex justify-content-evenly fs-6 text-dark'>{products.num} </p>
//                         <button className="btn btn-primary btn-add-to-cart  " style={stylebtn}>Add To Cart</button>
                        
//                         </div>
//                         ))}
//                     </Slider>
//              </div>


//                             {/* This will be showing on bigger screen and hide on smaller screen  */}





//                             <div style={{ overflow: 'hidden' }}>
//              <div className='row mt-5'>
//                  <div className='col-sm-6 col-md-4 col-lg-3'>
//                      <Cards picture={laptop} name={"Laptop"} price={"$500"} oldprice={"$600"} rating={stars.map((star, index) => (
//                          <span key={index}>{star}</span> 
//                      ))}num={"(70)"} />
//                  </div>
//                  <div className='col-sm-6 col-md-4 col-lg-3'>
//                      <Cards picture={game} name={"Gamepad"} price={"$400"} oldprice={"$500"} rating={stars.map((star, index) => (
//                          <span key={index}>{star}</span>
//                      ))}num={"(88)"} />
//                  </div>
//                  <div className='col-sm-6 col-md-4 col-lg-3'>
//                      <Cards picture={Headphones} name={"Headphones"} price={"$700"} oldprice={"$800"} rating={stars.map((star, index) => (
//                          <span key={index}>{star}</span>
//                      ))}num={"(90)"} />
//                  </div>
//                  <div className='col-sm-6 col-md-4 col-lg-3'>
//                      <Cards picture={Smartphone} name={"Smartphone"} price={"$900"} oldprice={"$1000"} rating={stars.map((star, index) => (
//                          <span key={index}>{star}</span>
//                      ))} num={"(77)"}/>
//                  </div>
//                  {showRestImages && (
//                      <>
//                          {showMore ? (
//                              <>
//                                  <div className='col-sm-6 col-md-4 col-lg-3 mt-3'>
//                                      <Cards picture={Smartwatch} name={"Smartwatch"} price={"$300"} oldprice={"$400"} rating={stars.map((star, index) => (
//                                          <span key={index}>{star}</span> 
//                                      ))} num={"(65)"}/>
//                                  </div>
//                                  <div className='col-sm-6 col-md-4 col-lg-3 mt-3'>
//                                      <Cards picture={Handbag} name={"Handbag"} price={"$1200"} oldprice={"$1300"} rating={stars.map((star, index) => (
//                                          <span key={index}>{star}</span>
//                                      ))} num={"(50)"}/>
//                                  </div>
//                                  <div className='col-sm-6 col-md-4 col-lg-3 mt-3'>
//                                      <Cards picture={CropTop} name={"CropTop"} price={"$500"} oldprice={"$1000"} rating={stars.map((star, index) => (
//                                          <span key={index}>{star}</span>
//                                      ))} num={"(40)"}/>
//                                  </div>
//                                  <div className='col-sm-6 col-md-4 col-lg-3 mt-3'>
//                                      <Cards picture={Shoes} name={"Shoes"} price={"$500"} oldprice={"$1000"} rating={stars.map((star, index) => (
//                                          <span key={index}>{star}</span>
//                                      ))} num={"(20)"}/>
//                                  </div>
//                                  <div style={{ textAlign: 'center' }} className='col-12 mt-5'>
//                                  <button class="btn-31 mt-4 ">
//                                                  <span class="text-container   mt-1 " onClick={toggleShowMore}>
//                                                      <span class="text">Show Less</span>
//                                                  </span>
//                                                  </button>
                                   
//                                  </div>
//                              </>
//                          ) : (
//                              <>
//                                  <div style={{ textAlign: 'center' }} className='col-12'>

//                                  <button class="btn-31  mt-4">
//                                                  <span className="text-container   " onClick={toggleShowMore}>
//                                                      <span class="text">Show More</span>
//                                                  </span>
//                                                  </button>
//                                      {/* <button className="btn btn-primary mt-5" onClick={toggleShowMore}>Show More</button> */}
//                                  </div>
//                              </>
//                          )}
//                      </>   
//                 )}
//                      <div id="lastImage"></div>
//            </div>
//            </div>
        

      
        

        
//     );
// }

// export default FlashsalesProduct;


// {/* <button class="btn-31  mt-4">
// <span className="text-container   " onClick={toggleShowMore}>
//     <span class="text">Show More</span>
// </span>
// </button> */}










import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import "../style/new.css"
import "../style/Timer.css"
import { IoStarSharp } from "react-icons/io5";
import  { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import 'slick-carousel/slick/slick-theme.css';

const FlashsalesProduct = () => {
    const game = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/28/3643201/1.jpg?1586';
    const laptop = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/5541121/1.jpg?0273";
    const Headphones = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/53/1319752/1.jpg?3751";
    const Smartphone = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/5829252/1.jpg?9789";
    const Smartwatch = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/16/1393461/1.jpg?8770";
    const Handbag ='https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/45/014127/1.jpg?2075';
    const CropTop = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/91/1072332/1.jpg?5275'
    const Shoes = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/74/785559/1.jpg?9996'

    // Array to store 5 copies of the icon
    const stars = new Array(5).fill(<IoStarSharp />);

    const [showRestImages, setShowRestImages] = useState(false);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const lastImage = document.getElementById('lastImage');
            if (lastImage) {
                const lastImageBounding = lastImage.getBoundingClientRect();
                if (lastImageBounding.bottom <= window.innerHeight) {
                    // Show the rest of the images
                    setShowRestImages(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };


    // const stylebtn ={
    //             width: '5rem',
               
    //          }
        
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
                 breakpoint: 768,  
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
        
           const products = [
             {
               name: 'Game',
               image: game,
               price: '$500',
               rating: stars,
               oldprice: "$677",
               num:"(90)"
             },
             {
                 name: 'Laptop',
                 image: laptop,
                 price: '$600',
                 rating: stars,
                 oldprice: "$700",
                 num:"(80)"
             },
             {
                 name: 'Headphones',
               image: Headphones,
               price: '$400',
               rating: stars,
               oldprice: "$500",
               num:"(70)"
             },
             {
                name: 'Smartphone',
              image: Smartphone,
              price: '$1000',
              rating: stars,
              oldprice: "$1200",
              num:"(0)"
            },
            {
                name: 'Smartwatch',
              image: Smartwatch,
              price: '$300',
              rating: stars,
              oldprice: "$3500",
              num:"(70)"
            },
            {
                name: 'Handbag',
              image: Handbag,
              price: '$400',
              rating: stars,
              oldprice: "$500",
              num:"(70)"
            },
            {
                name: 'CropTop',
              image: CropTop,
              price: '$400',
              rating: stars,
              oldprice: "$500",
              num:"(70)"
            },
             
            //   Add more founder data as needed
           ];

           const shadow={
             boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  
           }

    return (
        <div>

                    <div className="products-carousel">
                   <div className="carousel-arrows d-flex justify-content-between">
                      
                       <GrPrevious onClick={prevSlide} />
                         <GrNext onClick={nextSlide} />
                   </div>
                  
                    <Slider  ref={sliderRef} {...settings} >
                         {products.map((products, index) => (
                         <div key={index} className="card d-flex justify-content-between">
                         <img src={products.image} alt={products.name} style={found} className='img-fluid'/>
                        
                         <h3 className="text-center ">{products.name}</h3>
                         <h3 className='d-flex justify-content-evenly text-danger'>{products.price} <span><h6 className='text-dark'><strike>{products.oldprice}</strike></h6></span> </h3>
                         <p className='d-flex justify-content-evenly fs-6 text-warning'>{products.rating} </p>
                         <p className='d-flex justify-content-evenly fs-6 text-dark'>{products.num} </p>
                         <button className=" bg-primary rounded-4 text-white " >Add To Cart</button>
                        
                         </div>
                         ))}
                     </Slider>
              </div>









        <div style={{ overflow: 'hidden' }}>
            <div className='row mt-5 hideonsmall'>
                <div className='col-sm-6 col-md-4 col-lg-3 '>
                    <Cards picture={laptop} name={"Laptop"} price={"$500"} oldprice={"$600"} rating={stars.map((star, index) => (
                        <span key={index}>{star}</span> 
                    ))}num={"(70)"} style={shadow} />
                </div>
                <div className='col-sm-6 col-md-4 col-lg-3'>
                    <Cards picture={game} name={"Gamepad"} price={"$400"} oldprice={"$500"} rating={stars.map((star, index) => (
                        <span key={index}>{star}</span>
                    ))}num={"(88)"} />
                </div>
                <div className='col-sm-6 col-md-4 col-lg-3'>
                    <Cards picture={Headphones} name={"Headphones"} price={"$700"} oldprice={"$800"} rating={stars.map((star, index) => (
                        <span key={index}>{star}</span>
                    ))}num={"(90)"} />
                </div>
                <div className='col-sm-6 col-md-4 col-lg-3'>
                    <Cards picture={Smartphone} name={"Smartphone"} price={"$900"} oldprice={"$1000"} rating={stars.map((star, index) => (
                        <span key={index}>{star}</span>
                    ))} num={"(77)"}/>
                </div>
                {showRestImages && (
                    <>
                        {showMore ? (
                            <>
                                <div className='col-sm-6 col-md-4 col-lg-3 mt-3'>
                                    <Cards picture={Smartwatch} name={"Smartwatch"} price={"$300"} oldprice={"$400"} rating={stars.map((star, index) => (
                                        <span key={index}>{star}</span> 
                                    ))} num={"(65)"}/>
                                </div>
                                <div className='col-sm-6 col-md-4 col-lg-3 mt-3'>
                                    <Cards picture={Handbag} name={"Handbag"} price={"$1200"} oldprice={"$1300"} rating={stars.map((star, index) => (
                                        <span key={index}>{star}</span>
                                    ))} num={"(50)"}/>
                                </div>
                                <div className='col-sm-6 col-md-4 col-lg-3 mt-3'>
                                    <Cards picture={CropTop} name={"CropTop"} price={"$500"} oldprice={"$1000"} rating={stars.map((star, index) => (
                                        <span key={index}>{star}</span>
                                    ))} num={"(40)"}/>
                                </div>
                                <div className='col-sm-6 col-md-4 col-lg-3 mt-3'>
                                    <Cards picture={Shoes} name={"Shoes"} price={"$500"} oldprice={"$1000"} rating={stars.map((star, index) => (
                                        <span key={index}>{star}</span>
                                    ))} num={"(20)"}/>
                                </div>
                                <div style={{ textAlign: 'center' }} className='col-12 mt-5'>
                                <button class="btn-31  mt-4">
                                                <span className="text-container   " onClick={toggleShowMore}>
                                                    <span class="text">Show Less</span>
                                                </span>
                                                </button> 
                                </div>
                            </>
                        ) : (
                            <>
                                <div style={{ textAlign: 'center' }} className='col-12'>
                                <button class="btn-31  mt-4">
                                        <span className="text-container   " onClick={toggleShowMore}>
                                            <span class="text">Show More</span>
                                        </span>
                                        </button> 
                                </div>
                            </>
                        )}
                    </>
                )}
                <div id="lastImage"></div>
            </div>
        </div>
        </div>
    );
}

export default FlashsalesProduct;


























































