import React from "react"
import '../scss/style.scss'
import DecorationCategory from "./DecorationCategory"
import Features from "./Features"
import Header from "./Header"
import Offer from "./Offer"

function App() {
   return (
      <>

         {/* <Header /> */}

         <div className="wrapper">
            <main className="page">

               <DecorationCategory />
               <Offer />
               <Features />

            </main>
         </div>

         {/* <Header /> */}

      </>
   )
}

export default App
