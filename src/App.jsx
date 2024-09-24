import './App.css'
import { createBrowserRouter, Routes, Route, Link, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Routelayout from './components/RouteLayout'
import Home from './components/Home'
import About from './components/About'
import Cart from './components/Cart'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Routelayout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='cart' element={<Cart />}></Route>
      </Route>

    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
