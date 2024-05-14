import React from 'react'
import "../style/new.css"
import pes from "../assets/Frame 684.png"
import hat from "../assets/Frame 685.png"
import speaker from "../assets/Frame 686.png"
import peff from "../assets/Frame 687.png"
import CombineIcon from './CombineIcon'
// import Icons from './Icons';
// import IconsTwo from './IconsTwo'
// import IconsThree from './IconsThree'

const NewArrival = () => {
    const pess ={
           
            borderRadius: "10px",
            boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.25)",
    }

    const hatt ={
        height: "20rem",
        width: "30rem",
        // objectFit: "cover",
        // objectPosition: "center",
        // borderRadius: "10px",
        boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.25)",
    }

    const small ={
        height: "15rem",
        boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.25)",
    }
  return (
    <div>
             <div className='d-flex p-2 cate-card mt-5'>
                <div className='bg-danger p-2 text-danger mt-7 p-2'></div>
                <h6 className='text-danger m-2'>Featured</h6>
            </div>
                    <h3>New Arrival</h3>


                    {/* this will show on bigger screen  */}
                                    <div className='bigger'>


                                    <div className='d-flex flex-wrap justify-content-end gap-4 mt-4'>
                        <img src={pes} alt=""  className='img-fluid'style={pess} />
                        <img src={hat} alt="" className='img-fluid' style={hatt} />
                        <img src={speaker} alt="" className='img-fluid gap-3 small'style={small} />
                        <img src={peff} alt="" className='img-fluid smal'style={small} />

                    </div>
                                    </div>
                 

                                    {/* this will show on smaller screen */}
                    <div className='smaller'>
                    <div className='d-flex flex-wrap justify-content-end gap-4 mt-4'>
                        <img src={pes} alt=""  className='img-fluid' />
                        <img src={hat} alt="" className='img-fluid'  />
                        <div>
                        <img src={speaker} alt="" className='img-fluid'   />
                        <img src={peff} alt="" className='img-fluid'  />
                        </div>
                       

                    </div>
                    </div>
                    
                    {/* this is the animation icon */}
                    <div>
                        <CombineIcon/>
                    </div>
                        
                        
                  
    </div>
  )
}

export default NewArrival