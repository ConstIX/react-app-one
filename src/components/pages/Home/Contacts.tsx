import React from 'react'
import { useLocation } from 'react-router-dom'

import image1 from '../../../assets/img/contacts/01.png'
import image2 from '../../../assets/img/contacts/02.png'
import image3 from '../../../assets/img/contacts/03.png'

const info = [
   { link: 'tel:+7 (926) 917-88-53', image: image1, title: 'Телефон:', text: '+7 (926) 917-88-53' },
   { link: 'mailto:info@mvcreative.art', image: image3, title: 'Email:', text: 'info@mvcreative.art' },
   { link: 'https://yandex.ru/map-widget/v1/?um=constructor%3Af25b0c68f2e2ae45193cad04438d8d52c5036c5c31981c0e44662f130d28a1cd&amp;source=constructor', image: image2, title: 'Адрес:', text: 'Южнопортовая ул., 21, стр 7' },
]

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