import React from "react"
import { Route, Routes } from "react-router-dom"

import '../scss/style.scss'

import Home from "./pages/Home"

function App() {
   return (
      <div className="wrapper">

         {/* <Header /> */}

         <main className="page">

            <Routes>
               <Route path='/' element={<Home />} />
            </Routes>

         </main>
      </div>
   )
}

export default App
