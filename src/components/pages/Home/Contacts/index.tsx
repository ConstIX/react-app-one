import React from 'react'
import { useLocation } from 'react-router-dom'

import InfoBlock from './InfoBlock'
import MessageBlock from './MessageBlock'

const Contacts: React.FC = () => {

   const { pathname } = useLocation()

   return (
      <section id='message' className={`contacts ${pathname === '/contacts' ? 'contacts_l' : ''}`}>
         <div className="container">

            <InfoBlock />
            <MessageBlock />

         </div>
      </section>
   )
}

export default Contacts