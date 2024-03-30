import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {

    const{getTotalCartAmout} = useContext(StoreContext);

    const message = () => {
      alert("Your Order is confirmed, Have a nice day")
    }
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multiple-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div className="multiple-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multiple-fields">
          <input type="text" placeholder='Zip Code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text"  placeholder='Phone'/>
      </div>
      <div className="place-order-right">
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
            <button onClick={() => message()}>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder