

import React, { useState } from 'react';
import BestCard from './BestCard';
import { IoStarSharp } from "react-icons/io5";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import FlashsalesProduct from './FlashsalesProduct';
import "../style/sidebar.css"

const BestProduct = () => {
    const stars = new Array(5).fill(<IoStarSharp />);
    const [showRestImages,] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const phone = "https:ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/5829252/1.jpg?9789";
    const game = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/28/3643201/1.jpg?1586"
    const laptop = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/34/5541121/1.jpg?0273";
    const Headphones = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/53/1319752/1.jpg?3751";
    const Smartwatch = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/16/1393461/1.jpg?8770";
    const Handbag ='https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/45/014127/1.jpg?2075';
    const CropTop = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/91/1072332/1.jpg?5275'
    const Shoes = 'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/74/785559/1.jpg?9996'
    const ladyShoe = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/31/2195062/1.jpg?9554"
    const samsung = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/8339772/1.jpg?9227"
    const Bike = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/14/0185781/1.jpg?0744"
    const camera =" https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/26/962887/1.jpg?0413"
    const Best =[
                { image: phone,  name: "Phone" ,price: "$600", oldprice: "$700", num: "(90)",rating: stars},
                { image: laptop,  name: "Computer",price: "$600", oldprice: "$700", num: "(90)" },
                { image: camera,  name: "Camera",price: "$600", oldprice: "$700", num: "(90)" },
                { image: ladyShoe,  name: "LadyShoe",price: "$600", oldprice: "$700", num: "(90)" },
                { image: game,  name: "Gaming",price: "$600", oldprice: "$700", num: "(90)" },
                { image: Bike ,  name: "Bike " ,price: "$600", oldprice: "$700", num: "(90)"},
                { image: samsung ,  name: "Samsung ",price: "$600" , oldprice: "$700", num: "(90)"},
                { image: Shoes,  name: "Shoes",price: "$600" , oldprice: "$700", num: "(90)"},
                { image: CropTop,  name: "CropTop",price: "$600", oldprice: "$700", num: "(90)" },
                { image: Smartwatch,  name: "Watch",price: "$600", oldprice: "$700", num: "(90)" },
                { image: Handbag,  name: "Handbag",price: "$600", oldprice: "$700", num: "(90)" },
                { image: Headphones,  name: "Headset" ,price: "$600", oldprice: "$700", num: "(90)"}
            ]

            const [startIndex, setStartIndex] = useState(0);
            const [transitionDirection, setTransitionDirection] = useState('right'); // State to track transition direction

            const handleNext = () => {
                if (startIndex < Best.length - 1) {
                    setStartIndex(startIndex + 1);
                    setTransitionDirection('right'); // Set transition direction to right when clicking Next
                }
            };
        
            const handlePrevious = () => {
                if (startIndex > 0) {
                    setStartIndex(startIndex - 1);
                    setTransitionDirection('left'); // Set transition direction to left when clicking Previous
                }
            };
        

    return (
        <div>
            {/* Header */}
            <div className='d-flex p-2 cate-card mt-5'>
                <div className='bg-danger p-2 text-danger mt-7 p-2'></div>
                <h4 className='text-danger m-3'>This Months</h4>
            </div>
                    <h3>Best Selling Product</h3>
            {/* Previous and Next buttons */}
            <div className='d-flex justify-content-end mb-2'>
                <div className='mx-3 bg-secondary rounded-circle'>
                    <GrLinkPrevious onClick={handlePrevious} />
                </div>
                <div className='bg-secondary rounded-circle'>
                    <GrLinkNext onClick={handleNext} />
                </div>
            </div>


            {/* this is the main product but its going to be invisible on smaller device */}
                    <div className='best-card-main'>
                        <FlashsalesProduct/>
                    </div>
            {/* Show More/Show Less buttons */}
            {showRestImages && (
                <div style={{ textAlign: 'center' }} className='col-12 mt-5'>
                    <button className="btn btn-primary" onClick={toggleShowMore}>
                        {showMore ? "Show Less" : "Show More"}
                    </button>
                </div>
            )}

            {/* Card Grid */}
            <div className={`d-flex justify-content-evenly cate-card transition-${transitionDirection}`}>

                {Best.slice(startIndex, startIndex + 1).map((Best, index) => (
                    <div className='cat' key={index}>
                        <BestCard pics={Best.image} 
                        name={Best.name} 
                        price={Best.price} 
                        oldprice={Best.oldprice} 
                        num={Best.num}
                        rating={stars}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BestProduct;
