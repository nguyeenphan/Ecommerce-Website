import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png';
import add_icon from  '../Assets/add_icon.png';
import minus_icon from  '../Assets/minus_icon.png';

function CartItems(props) {
    const { getTotalCartAmount, all_product, cartItems, addToCart, removeToCart, minusItems } = useContext(ShopContext);
    return (
        <div className='cartitems'>
            <div className='cartitems-format-head'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className='cartitems-format cartitems-format-main'>
                                <img src={e.image} alt='' className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <div className='quantity'>
                                    <img src={minus_icon} alt='' className='quantity-icon' onClick={() => { minusItems(e.id) }}/>
                                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                    <img src={add_icon} alt='' className='quantity-icon'onClick={() => { addToCart(e.id) }}/>
                                </div>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeToCart(e.id) }} alt='' />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>CHECKOUT</button>
                </div>
                <div className='cartitems-promocode'>
                    <p>If you have a promo code, Enter it here</p>
                    <div className='cartitems-promobox'>
                        <input type='text' placeholder='promo code' />
                        <button>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;