import React from 'react'
import CategoryBlock from './CategoryBlock'

import image1 from '../../../../assets/img/categories/01.jpg'
import image2 from '../../../../assets/img/categories/02.jpg'
import image3 from '../../../../assets/img/categories/03.jpg'
import image4 from '../../../../assets/img/categories/04.jpg'
import image5 from '../../../../assets/img/categories/05.jpg'
import image6 from '../../../../assets/img/categories/06.jpg'
import image7 from '../../../../assets/img/categories/07.jpg'
import image8 from '../../../../assets/img/categories/08.jpg'

const category = [
   { image: image1, text: 'Свадьбы' },
   { image: image2, text: 'Дни рождения' },
   { image: image3, text: 'Презентации' },
   { image: image4, text: 'выставки' },
   { image: image5, text: 'спартакиады' },
   { image: image6, text: 'концерты' },
   { image: image7, text: 'фестивали' },
   { image: image8, text: 'фешн показы' }
]

const DecorationCategory: React.FC = () => {
   return (
      <section className='categories'>
         <div className="container">

            <div className="categories__header-block header-block">
               <div className="header-block__title header-block__title_dc">MV creative - производство декораций</div>
               <div className="header-block__text">Занимаемся застройкой декораций разной направленности. Оформляем спортивные, модные, частные и корпоративные мероприятия.</div>
            </div>

            <div className="categories__body">
               {category.map((obj, idx) => <CategoryBlock key={idx} {...obj} />)}
            </div>

            <div className="categories__footer-block">а также <br /> <b>любые другие Ваши мероприятия</b></div>

         </div>
      </section>
   )
}

export default DecorationCategory