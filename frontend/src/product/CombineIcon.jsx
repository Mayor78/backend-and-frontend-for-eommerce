import React from 'react'
import Icons from './Icons';
import IconsTwo from './IconsTwo'
import IconsThree from './IconsThree'




const CombineIcon = () => {
  return (
    <div>
            <div className='icon '>
                                <div className='bg-black d-flex justify-content-evenly  '>
                                    <div className=' mt-2 text-white'>
                                        <Icons/>
                                        <h3 className='fs-5'>24/7 CUSTOMER SERVICE</h3>
                                    <p className='fs-6'>Friendly 24/7 customer support</p>
                                    </div>
                              
                             <div className='mt-3 text-white'>
                                    <IconsTwo/>
                                    <h3 className='fs-5'>FREE AND FAST DELIVERY</h3>
                                    <p className='fs-6'>Free delivery for all orders over $140</p>
                             </div>
                             <div className='mt-3 text-white'>
                             <IconsThree/>
                             <h3 className='fs-5'>MONEY BACK GUARANTEE</h3>
                                    <p className='fs-6'>We reurn money within 30 days</p>
                             </div>


                         
                        </div>

                            </div> 
                            <div className='iconShow  mt-3'>
                          <div className='bg-black justify-content-evenly  '>

                             <Icons /> 
                             <div className='mt-3'>
                                    <IconsTwo/>
                             </div>
                             <div className='mt-3'>
                             <IconsThree/>
                             </div>
                        </div>
                          
                         
                        </div>

            
                 </div>
  )
}

export default CombineIcon
