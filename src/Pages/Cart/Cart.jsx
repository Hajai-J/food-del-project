import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmout } = useContext(StoreContext);
  const navigate = useNavigate(); 
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quality</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((items, index) => {
          if (cartItems[items._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={items.image} alt="img" />
                  <p>{items.name}</p>
                  <p>Rs:{items.price}</p>
                  <p>{cartItems[items._id]}</p>
                  <p>Rs:{items.price * cartItems[items._id]}</p>
                  <p onClick={() => removeFromCart(items._id)} className="cross">x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
            <h2>Carts-total</h2>
            <div>
            <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>Rs:{getTotalCartAmout()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>Rs:{getTotalCartAmout() === 0 ? 0 : 2}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <b>Total</b>
                    <b>Rs:{getTotalCartAmout() === 0 ?  0:getTotalCartAmout() + 2}</b>
                </div>
            </div>
            <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
            <div>
                <p>If you have promo code, Enter it here</p>
                <div className="cart-promocode-input">
                    <input type="text" placeholder="promo code" />
                    <button>Submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
