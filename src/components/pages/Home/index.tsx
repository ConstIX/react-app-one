import React from 'react'

import Brand from './Brand'
import DecorationCategory from "./DecorationCategory"
import Features from "./Features"
import Fullpage from './Fullpage'
import Portfolio from "./Portfolio"
import Services from './Services'

const Home: React.FC = () => {
   return (
      <>
         <Fullpage />
         <DecorationCategory />
         <Features />
         <Portfolio />
         <Services />
         <Brand />
      </>
   )
}

export default Home