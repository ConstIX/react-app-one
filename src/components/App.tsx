import React from "react"
import { Route, Routes } from "react-router-dom"

import Header from "./Header"
import Footer from "./Footer"
import Home from "./pages/Home"
import Portfolio from "./pages/Home/Portfolio"
import Contacts from "./pages/Home/Contacts"
import About from "./pages/About"

import '../scss/style.scss'

function App() {

   return (
      <div className="wrapper">

         <Header />

         <main className="content">

            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/portfolio' element={<Portfolio />} />
               <Route path='/about' element={<About />} />
               <Route path='/contacts' element={<Contacts />} />
            </Routes>

         </main>

         <Footer />

      </div>
   )
}

export default App
