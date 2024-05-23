import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import HomeContext from '../context/HomeContext';
import CartItem from '../product/CartItem';
import { PRODUCTS } from '../product/product';

const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(HomeContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <div>
            <div className='d-none d-md-flex justify-content-between m-3'>
                <div className="d-flex">
                    <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
                    <span className="mx-1">/</span>
                    <NavLink className="nav-link contact" activeClassName="active" to="/contact">Cart</NavLink>
                </div>
            </div>

            

            <div className='cartItems'>
                  {/* <div className='d-flex justify-content-evenly'> 
                    <h4>Product</h4>
                    <h4>Price</h4>
                    <h4>Quantity</h4>
                    <h4>Subtotal</h4>
                  </div> */}
                {Object.keys(cartItems).map((productId) => {
                    const product = PRODUCTS.find(item => item.id === parseInt(productId));
                    if (product) {
                        return (
                            <CartItem key={product.id} data={{ ...product, quantity: cartItems[productId] }} />
                        );
                    }
                    return null;
                })}
            </div>

            {totalAmount > 0 ? (
                <div className='checkout'>
                    <p>Subtotal: ${totalAmount}</p>
                    <button onClick={() => navigate('/')}>Continue Shopping</button>
                    <button>Checkout</button>
                </div>
            ) : (
                <h1>Your Cart Is Empty</h1>
            )}
        </div>
    );
};

export default Cart;