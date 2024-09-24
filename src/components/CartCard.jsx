import React, { useContext, useState } from 'react'
import './style.css'
function CartCard({ item }) {
    const { removeitem, cartCount, setCartCount,TotalCartPrice,setTotalCartPrice} = useContext(CartContext)
    const [quantity, setquantity] = useState(item.quantity)



    function handleChange(e) {
        let newquantity = Number(e.target.value)
        let newTotalCart = (Math.round((TotalCartPrice*100)-(item.price*item.quantity*100)+(item.price*newquantity*100))/100)
        setTotalCartPrice(newTotalCart)
        let newCount = cartCount - item.quantity + newquantity
        item.quantity = newquantity
        setquantity(item.quantity)
        setCartCount(newCount)
    }


    return (
        <div className='cartItem'>
            <div className='cartItemCard'>
                <img className='cartItemCard-image ' src={item.image} alt="" />
                <div className='cartItemDetails'>
                    <h3>{item.title}</h3>
                    <div className="d-flex small text-warning mb-2">
                            {
                                [...Array(Math.ceil(item.rating.rate))].map((ele, index) =>
                                    <div className="bi-star-fill"></div>

                                )

                            }
                            {
                                [...Array(5 - Math.ceil(item.rating.rate))].map((ele, index) =>
                                    <div className="bi-star"></div>

                                )
                            }
                            <div className="ms-2" style={{fontWeight:"bold"}}>{item.rating.rate}</div>
                            <div className="ms-2" style={{color:"#007185", fontWeight:"bold"}}>{item.rating.count}</div>
                        </div>
                    <h5 className='text-decoration-underline'>Description</h5>
                    <p className='description'>{item.description}</p>
                </div>
            </div>

            <div className='priceDetails'>
                <div className='quantityAndPrice'>
                    <label htmlFor='quantity'>Quantity</label>
                    <select name="quantity" id="" value={quantity} onChange={handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>

                </div>
                <p>price: ${item.price}</p>
                <h5>Total price: ${item.price * quantity}</h5>
                <button className="removebtw btn btn-danger m-2" onClick={() => {
                    removeitem(item)
                    item.incart = !(item.incart)
                }
                }>Remove</button>
            </div>


        </div>
    )
}

export default CartCard