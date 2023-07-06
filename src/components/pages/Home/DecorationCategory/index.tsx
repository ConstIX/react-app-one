import React from 'react'
import CategoryBlock from './CategoryBlock'

import { category } from '../../../../data'

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