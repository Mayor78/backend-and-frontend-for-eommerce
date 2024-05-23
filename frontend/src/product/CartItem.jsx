import React, { useContext } from 'react';
import HomeContext from '../context/HomeContext';


const CartItem = ({ data }) => {
    const { removeFromCart, addToCart } = useContext(HomeContext);
    const imge ={
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: '10px'
    }
    return (
        <div className="cart-item mb-2">
            <div className=' d-lg-flex d-md-flex justify-content-evenly d-sm-block'> 
                <div>
                <h4>product</h4>
                <img src={data.image} alt={data.name}  style={imge}/>
                <h4>{data.name}</h4>
                </div>
                <div>
                    <h4>price</h4>
                    <p>${data.price}</p>
                </div>
                <div>
                    <h4> Quantity</h4>
                    
                    
                    <div className='d-flex gap-2'>
                        <button className='text-white btn btn-danger' onClick={() => removeFromCart(data.id)} >-</button>
                        <h4 className='fs-5'>{data.quantity}</h4>
                        <button className='text-white btn btn-success' onClick={() => addToCart(data.id)} >+ </button>
                       
                    </div>

                    </div>
                    <div>
                        <h4>total</h4>
                        <p>${parseFloat (data.price) * parseInt(data.quantity)}</p>
                    </div>
    
               
            </div>
            
            <div>
                
               
                
                
                
            </div>
        </div>
    );
};

export default CartItem;
