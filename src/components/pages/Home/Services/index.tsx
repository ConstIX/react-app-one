import React from 'react'
import { useLocation } from 'react-router-dom'

const Services: React.FC = () => {

   const { pathname } = useLocation()

   return (
      <section className={`type ${pathname === '/services' ? 'type_l' : ''}`}>
         <div className="container">

            <div className="type__header-block header-block">
               <div className="header-block__title">Направления работы</div>
            </div>

            <div className="type__body"></div>

         </div>
      </section>
   )
}

export default Services