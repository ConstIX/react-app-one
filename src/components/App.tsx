import React from "react"
import { Route, Routes } from "react-router-dom"

import Header from "./Header"
import Footer from "./Footer"
import Home from "./pages/Home"

import '../scss/style.scss'

function App() {
   return (
      <div className="wrapper">

         <Header />

         <main className="page">

            <Routes>
               <Route path='/' element={<Home />} />
            </Routes>

         </main>

         <Footer />

      </div>
   )
}

export default App
