import React from 'react'
import { useLocation } from 'react-router-dom'

const Contacts: React.FC = () => {

   const { pathname } = useLocation()

   return (
      <section id='message' className={`contacts ${pathname === '/contacts' ? 'contacts_l' : ''}`}>
         <div className="container">

            <div className="contacts__info">
               <div className="contacts__header-block header-block">
                  <div className="header-block__title">Контакты</div>
               </div>
            </div>

            <div className="contacts__message">
               <div className="contacts__header-block header-block">
                  <div className="header-block__title">Отправить сообщение</div>
               </div>
            </div>

         </div>
      </section>
   )
}

export default Contacts