import React, { useState } from 'react'
import { IoStarSharp } from "react-icons/io5";
import ExploreCard from './ExploreCard';



const Explore = () => {


    const stars = new Array(5).fill(<IoStarSharp />);


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






    const Explore =[
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


    const [startIndex, ] = useState(0);
    // const [transitionDirection, setTransitionDirection] = useState('right'); // State to track transition direction



    // const handleNext = () => {
    //     if (startIndex < Explore.length - 1) {
    //         setStartIndex(startIndex + 1);
    //         setTransitionDirection('right'); // Set transition direction to right when clicking Next
    //     }
    // };

    // const handlePrevious = () => {
    //     if (startIndex > 0) {
    //         setStartIndex(startIndex - 1);
    //         setTransitionDirection('left'); // Set transition direction to left when clicking Previous
    //     }
    // };

  return (
    <div>
              <div className=' d-flex p-2 cate-card mt-5'>
                <div className='bg-danger p-1 text-danger mt-7 '></div>
                <h4 className='text-danger m-3 '> Our Products</h4>
            </div>
            <h3>Explore Our Products</h3>






            <div className={`d-flex flex-wrap justify-content-evenly cate-card transition`}>

{Explore.slice(startIndex, startIndex + 4).map((Explore, index) => (
    <div className='' key={index}>
        <ExploreCard picture={Explore.image} 
        name={Explore.name} 
        price={Explore.price} 
        oldprice={Explore.oldprice} 
        num={Explore.num}
        rating={stars}/>
    </div>
))}
</div>


<div className={`d-flex flex-wrap justify-content-evenly cate-card transition mt-3`}>

{Explore.slice(startIndex, startIndex + 4).map((Explore, index) => (
    <div className='' key={index}>
        <ExploreCard picture={Explore.image} 
        name={Explore.name} 
        price={Explore.price} 
        oldprice={Explore.oldprice} 
        num={Explore.num}
        rating={stars}/>
    </div>
))}
</div>
           
    </div>
  )
}

export default Explore
