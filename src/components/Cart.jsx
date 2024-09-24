import React from 'react'
import './style.css'
import EmptyCart from './EmptyCart'
import { useSelector } from 'react-redux'
import CartCard from './CartCard'

function Cart() {
    const {cartContains,TotalCartPrice,cartCount} = useSelector((state) => state.cart)
    return (
        <>
            {TotalCartPrice ?
                <div>
                    <h2>Cart</h2>
                    <div className='cartWindow'>
                        <div className='cartCardWindow'>
                            {
                                cartContains.map((item) =>
                                    <CartCard key={item.id} item={item} />
                                )
                            }
                        </div>
                        <div className='checkout'>
                            <h5 className='fw-bolder mt-2'>Order Summary</h5>
                            <div className='text-start ps-4 '>
                            <div className='row mb-1'>
                                    <div className='col fw-bolder'>Total {cartCount > 1 ? 'Items' : 'Item'}</div>
                                    <div className='col'>{cartCount}</div>
                                </div>
                                <div className='row mb-1'>
                                    <div className='col fw-bolder'>Total Cost</div>
                                    <div className='col fw-bolder'>${TotalCartPrice}</div>
                                </div>
                                <div className='row mb-1'>
                                    <div className='col fw-bolder'>GST</div>
                                    <div className='col'>18%</div>
                                </div>
                                <div className='row mb-1'>
                                    <div className='col fw-bolder'>Shipping-cost</div>
                                    <div className='col'>{TotalCartPrice >= 30 ? 'Free' : '$5'}</div>
                                </div>
                                <div className='row fw-bolder mb-1'>
                                    <div className='col'>You Pay</div>
                                    <div className='col'>${Math.round((TotalCartPrice * 100 * 1.18) + (5 * 100)) / 100}</div>
                                </div>
                            </div>
                            <div className='mb-2'> <button className='btn btn-warning'>Proceed to buy</button>
                            </div>
                        </div>
                    </div>
                </div> : <EmptyCart />
            }
        </>

    )
}

export default Cart