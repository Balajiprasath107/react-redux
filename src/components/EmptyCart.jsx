import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

function EmptyCart() {
  return (
    <div className='emptyCart'>
        <img className='emptyCartImage' src="https://img.freepik.com/free-vector/empty-cart-concept-illustration_114360-17069.jpg?size=626&ext=jpg" alt="" />
        <h2>Your Cart is Empty</h2>
        <h5>Looks like you haven't added anything in your cart yet</h5>
        <NavLink to='/'><button className='btn btn-primary m-2'>Home</button></NavLink>
    </div>
  )
}

export default EmptyCart