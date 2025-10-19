import React from 'react'
import ReactRouter from './router/ReactRouter.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div>
      <Navbar/>
      <ReactRouter/>
      <Footer/>
    </div>
  )
}