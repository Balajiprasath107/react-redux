import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const { cartCount } = useSelector((state) => state.cart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item mx-5">
                            <NavLink className="nav-link  " to='/'>Home <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item mx-5">
                            <NavLink className="nav-link" to="about">About</NavLink>
                        </li>
                        <li className="nav-item dropdown mx-5">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Shop
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">All products</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Popular items</a>
                                <a className="dropdown-item" href="#">New arrivals</a>
                            </div>
                        </li>
                    </ul>
                    <NavLink to='cart'>
                        <button className="btn btn-outline-dark shadow-none me-5" type="submit" >
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span>

                        </button>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar