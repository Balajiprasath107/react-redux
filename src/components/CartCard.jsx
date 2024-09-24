import React from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { cartremove, newcartCount, newtotal } from '../redux/reducer/cart.reducer'
import { changeincart, changequantity } from '../redux/reducer/products.reducer'
function CartCard({ item }) {
    const dispatch = useDispatch()
    const { quantity } = useSelector((state) => state.products)
    const { cartCount, TotalCartPrice } = useSelector((state) => state.cart)
    function handleChange(e) {
        let newquantity = Number(e.target.value)
        let newTotalCart = (Math.round((TotalCartPrice * 100) - (item.price * item.quantity * 100) + (item.price * newquantity * 100)) / 100)
        dispatch(newtotal(newTotalCart))
        let newCount = cartCount - quantity[item.id - 1] + newquantity
        dispatch(changequantity([item.id, newquantity]))
        dispatch(newcartCount(newCount))
    }


    return (

        <div className='cartItem'>
            <div className='cartItemCard'>
                <img className='cartItemCard-image ' src={item.image} alt="" />
                <div className='cartItemDetails'>
                    <h3>{item.title}</h3>
                    <div className="d-flex small text-warning mb-2">
                        {
                            [...Array(Math.round(item.rating))].map((ele, index) =>
                                <div className="bi-star-fill" key={item.id + "star" + index}></div>

                            )

                        }
                        {
                            [...Array(5 - Math.round(item.rating))].map((ele, index) =>
                                <div className="bi-star" key={item.id + "nostar" + index}></div>

                            )
                        }
                        <div className="ms-2" style={{ fontWeight: "bold" }}>{item.rating}</div>
                        <div className="ms-2" style={{ color: "#007185", fontWeight: "bold" }}>{item.count}</div>
                    </div>
                    <h5 className='text-decoration-underline'>Description</h5>
                    <p className='description'>{item.description}</p>
                </div>
            </div>

            <div className='priceDetails'>
                <div className='quantityAndPrice'>
                    <label htmlFor='quantity'>Quantity</label>
                    <select name="quantity" id="" value={quantity[item.id - 1]} onChange={handleChange}>
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
                <h5>Total price: ${item.price * quantity[item.id - 1]}</h5>
                <button className="removebtw btn btn-danger m-2" onClick={() => {
                    let newcount = cartCount - quantity[item.id - 1]
                    dispatch(newcartCount(newcount))
                    let newTotalCart = Math.round((TotalCartPrice * 100) - ((item.price * 100) * quantity[item.id - 1])) / 100
                    dispatch(newtotal(newTotalCart))
                    dispatch(changequantity([item.id, 1]))
                    dispatch(changeincart(item.id))
                    dispatch(cartremove(item))
                }
                }>Remove</button>
            </div>


        </div>
    )
}

export default CartCard