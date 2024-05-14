import React, { useState } from 'react';
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import CartCard from './CartCard';
import "../style/sidebar.css"

const Categories = () => {
    const phone = 'https://cdn4.iconfinder.com/data/icons/leto-devices-1/64/mobile_phone_device-512.png';
    const computer = "https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-05-512.png";
    const watch = "https://cdn0.iconfinder.com/data/icons/essentials-4/1715/watch-512.png";
    const camera = "https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/camera-512.png";
    const gaming = "https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/ps4-controller-512.png";
    const headset = "https://cdn1.iconfinder.com/data/icons/essentials-pack/96/earphone_headset_headphone_dj_listen-512.png";
    
    const categories = [
        { image: phone, title: "Phone" },
        { image: computer, title: "Computer" },
        { image: camera, title: "Camera" },
        { image: watch, title: "Watch" },
        { image: gaming, title: "Gaming" },
        { image: headset, title: "Headset" }
    ];

    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        if (startIndex < categories.length - 2) {
            setStartIndex(startIndex + 2);
        }
    };

    const handlePrevious = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 2);
        }
    };

    return (
        <div>
           
            <div className='d-flex p-2 cate-card'>
                <div className='bg-danger p-2 text-danger mt-7 p-2'> </div>
                <h4 className='text-danger m-3'>Categories</h4>
             </div>
                  <h2>Browse By Categories</h2>
             {/* the image i want to show on smaller screen and how i want to be nexting it  */}
             <div className='d-flex justify-content-end mb-2 '>
                <div className='mx-3 bg-secondary rounded-circle'>
                <GrLinkPrevious onClick={handlePrevious} />
                </div>
                <div className='bg-secondary rounded-circle'>
                <GrLinkNext onClick={handleNext} />
                </div>
              
              </div>

            {/* the image i want to show on bigger screen */}
              <div className='cat2'>
              <div className='d-flex justify-content-evenly '>
            <CartCard image={phone} title={'phone'}/>
            <CartCard image={computer} title={'computer'}/>
            <CartCard image={camera} title={'camera'}/>
            <CartCard image={watch} title={'watch'}/>
            <CartCard image={gaming} title={'gaming'}/>
            <CartCard image={headset} title={'headset'}/>


            </div>
              </div>
          
              <div className='d-flex justify-content-evenly cate-card '>
                {categories.slice(startIndex, startIndex + 2).map((category, index) => (
                    <div className='cat ' key={index}>
                        <CartCard image={category.image} title={category.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;
