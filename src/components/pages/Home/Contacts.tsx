import React from 'react'

import { useLocation } from 'react-router-dom'
import { info } from '../../../data'

const Contacts: React.FC = () => {

   const { pathname } = useLocation()

   return (
      <section id='message' className={`contacts ${pathname === '/contacts' ? 'contacts_l' : ''}`}>
         <div className="container">

            <div className="contacts__body">

               <div className="contacts__header-block header-block">
                  <div className="header-block__title">Контакты</div>
               </div>

               <div className="contacts__info">
                  {
                     info.map(obj =>
                        <div key={obj.title} className="contacts__item">
                           <div className="contacts__image"><img src={obj.image} alt="..." /></div>
                           <div className="contacts__text-block">
                              <div className="contacts__title">{obj.title}</div>
                              <a href={obj.link} className="contacts__text">{obj.text}</a>
                           </div>
                        </div>
                     )
                  }
               </div>

            </div>

         </div>
      </section>
   )
}

export default Contacts