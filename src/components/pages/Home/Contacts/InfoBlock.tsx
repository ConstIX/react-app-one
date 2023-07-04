import React from 'react'

import image1 from '../../../../assets/img/contacts/01.png'
import image2 from '../../../../assets/img/contacts/02.png'
import image3 from '../../../../assets/img/contacts/03.png'

const info = [
   { link: 'tel:+7 (926) 917-88-53', image: image1, title: 'Телефон:', text: '+7 (926) 917-88-53' },
   { link: 'mailto:info@mvcreative.art', image: image3, title: 'Email:', text: 'info@mvcreative.art' },
   { link: 'https://yandex.ru/map-widget/v1/?um=constructor%3Af25b0c68f2e2ae45193cad04438d8d52c5036c5c31981c0e44662f130d28a1cd&amp;source=constructor', image: image2, title: 'Адрес:', text: 'Южнопортовая ул., 21, стр 7' },
]

const InfoBlock: React.FC = () => {
   return (
      <div className="contacts__body contacts__body_i">

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

         <div className="contacts__map">
            <iframe
               src="https://yandex.ru/map-widget/v1/?um=constructor%3Af25b0c68f2e2ae45193cad04438d8d52c5036c5c31981c0e44662f130d28a1cd&amp;source=constructor"
               width="1057"
               height="400"
               frameBorder="0"
            >
            </iframe>
         </div>

      </div>
   )
}

export default InfoBlock