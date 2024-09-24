import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Routelayout() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Routelayout