import React from 'react';
import Sidebar from '../components/SideBar';
import FlashSales from '../components/FlashSales';
import FlashsalesProduct from '../product/FlashsalesProduct';
import Categories from '../product/Categoies';
import BestProduct from '../product/BestProduct';
import "../style/Timer.css"
import Frame  from '../assets/Frame.png'
import Explore from '../product/Explore';
import NewArrival from '../product/NewArrival';

const Home = () => {
   
    const imageStyle = {
        width: '100%', // Set the width to 100% to cover the space
        height: '100%', // Set the height to 100% to cover the space
    };

    const style ={
        width: '2%', // Set the width to 100% to cover the space
        // height: '10%', // Set the height to 100% to cover the space
    }

    return (
    <div>
        <div className='d-lg-flex justify-content-between'>
            <div className='d-none d-lg-block'> {/* Hide on small and medium screens */}
                    <Sidebar/><div class="d-flex" style={{height: 200}}>
    <div class="vr"></div>
    </div>
            </div>
            <div className='w-100'> {/* Take up 100% of the width */}
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={`${process.env.PUBLIC_URL}/assets/slide1.png`} className="d-block w-100" style={imageStyle} alt=""/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={`${process.env.PUBLIC_URL}/assets/slide1.png`} className="d-block w-100" style={imageStyle} alt=""/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={`${process.env.PUBLIC_URL}/assets/slide1.png`} className="d-block w-100" style={imageStyle} alt=""/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
           
        </div>
        <div className='d-flex p-2'>
      <div className={`bg-danger p-2 text-danger mt-7 p-2  `} style={{ style  }}> </div>
            <h4 className='text-danger m-3'>Today's</h4>
      </div>
            <FlashSales/>
            <FlashsalesProduct/>
            <Categories/>
            <BestProduct/>
            <div className='d-flex justify-content-center mt-5'>
                <img src={Frame} alt=""  className='img-fluid'/>
            </div>

            <Explore/>

            <NewArrival/>

 
        </div>
    );
}

export default Home;
