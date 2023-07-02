import React from 'react'

import Brand from './Brand'
import Contacts from './Contacts'
import DecorationCategory from "./DecorationCategory"
import Features from "./Features"
import Offer from "./Offer"
import Portfolio from "./Portfolio"
import WorkType from './WorkType'

const Home: React.FC = () => {
   return (
      <>
         <DecorationCategory />
         <Offer />
         <Features />
         <Portfolio />
         <WorkType />
         <Brand />
         <Contacts />
      </>
   )
}

export default Home