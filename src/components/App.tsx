import React from "react"
import { Route, Routes } from "react-router-dom"

import Header from "./Header"
import Footer from "./Footer"
import Home from "./pages/Home"
import Portfolio from "./pages/Home/Portfolio"
import About from "./pages/About"
import Services from "./pages/Home/Services"
import SingleServices from "./layouts/SingleServices"

import '../scss/style.scss'

function App() {

   return (
      <div className="wrapper">

         <Header />

         <main className="content">

            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/portfolio' element={<Portfolio />} />
               <Route path='/services' element={<Services />} />
               <Route path='/about' element={<About />} />
               <Route path='/services/:id' element={<SingleServices />} />
            </Routes>

         </main>

         <Footer />

      </div>
   )
}

export default App
