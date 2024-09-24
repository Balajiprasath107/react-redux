import React from 'react'

function Navbar() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item mx-5">
                      <a className="nav-link  " href="#">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item mx-5">
                      <a className="nav-link" href="#">About</a>
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
                  <button className="btn btn-outline-dark shadow-none me-5" type="submit" >
                  <i className="bi-cart-fill me-1"></i>
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">{0}</span>
                
                  </button>
           </div>
          </nav>
    </div>
  )
}

export default Navbar