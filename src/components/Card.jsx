import React, { useEffect, useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { addItems, removeitem } from '../redux/reducer/cart.reducer'
import { changeincart } from '../redux/reducer/products.reducer'


function Card({item}) {
    const dispatch = useDispatch()
    const {incart} = useSelector((state) => state.products)
    function changeAddtoCart(){
        incart[item.id -1]?dispatch(removeitem(item)): dispatch(addItems(item))
        dispatch(changeincart(item.id))
    }
    return (
        <div className="col mb-5 z-2 positon-absolute">
            <div className="card h-100 z-2 positon-absolute">
                    <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                <img className="card-img-top object-fit-contain border rounded" style={{height:'250px'}} src={item.image} alt="..."></img>
                <div className="card-body p-4">
                    <div className="text-center">
                        {/* Product name*/}
                        <h6 className="fw-bolder itemTitle">{item.title}</h6>
                        {/* Product reviews*/}
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            {
                                [...Array(Math.round(item.rating))].map((ele, index) =>
                                    <div className="bi-star-fill" key={item.id+"star"+index}> </div>
                                )

                            }
                            {
                                [...Array(5 - Math.round(item.rating))].map((ele, index) =>
                                    <div className="bi-star" key={item.id+"nostar"+index}></div>

                                )
                            }
                            <div className="ms-2" style={{fontWeight:"bold"}}>{item.rating}</div>
                            <div className="ms-2" style={{color:"#007185", fontWeight:"bold"}}>{item.count}</div>
                        </div>
                        {/* Product price*/}
                        {
                            <div>
                                ${item.price}
                            </div>
                        }

                    </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent"onClick={changeAddtoCart}>
                        {
                        incart[item.id -1]?<div className="text-center "><a className="btn btn-outline-dark mt-auto text-white bg-dark">Remove from cart</a> </div>:
                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" >Add to Cart</a> </div>
                        }
                    </div>


            </div>
        </div>
    )
}

export default Card