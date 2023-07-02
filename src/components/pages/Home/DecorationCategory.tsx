import React from 'react'

import image1 from '../../../assets/img/categories/01.jpg'
import image2 from '../../../assets/img/categories/02.jpg'
import image3 from '../../../assets/img/categories/03.jpg'
import image4 from '../../../assets/img/categories/04.jpg'
import image5 from '../../../assets/img/categories/05.jpg'
import image6 from '../../../assets/img/categories/06.jpg'
import image7 from '../../../assets/img/categories/07.jpg'
import image8 from '../../../assets/img/categories/08.jpg'

const DecorationCategory: React.FC = () => {
   return (
      <section className='categories'>
         <div className="container">

            <div className="categories__header-block header-block">
               <div className="header-block__title header-block__title_dc">MV creative - производство декораций</div>
               <div className="header-block__text">Занимаемся застройкой декораций разной направленности. Оформляем спортивные, модные, частные и корпоративные мероприятия.</div>
            </div>

            <div className="categories__body">

               <div className="categories__column">
                  <div className="categories__item item">
                     <div className="item__image"><img src={image1} alt="" /></div>
                     <div className="item__text">Свадьбы</div>
                  </div>
               </div>

               <div className="categories__column">
                  <div className="categories__item item">
                     <div className="item__image"><img src={image2} alt="" /></div>
                     <div className="item__text">Дни рождения</div>
                  </div>
               </div>

               <div className="categories__column">
                  <div className="categories__item item">
                     <div className="item__image"><img src={image3} alt="" /></div>
                     <div className="item__text">Презентации</div>
                  </div>
               </div>

               <div className="categories__column">
                  <div className="categories__item item">
                     <div className="item__image"><img src={image4} alt="" /></div>
                     <div className="item__text">выставки</div>
                  </div>
               </div>

               <div className="categories__column">
                  <div className="categories__item item">
                     <div className="item__image"><img src={image5} alt="" /></div>
                     <div className="item__text">спартакиады</div>
                  </div>
               </div>

               <div className="categories__column">
                  <div className="categories__item item">
                     <div className="item__image"><img src={image6} alt="" /></div>
                     <div className="item__text">концерты</div>
                  </div>
               </div>

               <div className="categories__column">
                  <div className="categories__item item">
                     <div className="item__image"><img src={image7} alt="" /></div>
                     <div className="item__text">фестивали</div>
                  </div>
               </div>

               <div className="categories__column">
                  <div className="categories__item item">
                     <div className="item__image"><img src={image8} alt="" /></div>
                     <div className="item__text">фешн показы</div>
                  </div>
               </div>

            </div>

            <div className="categories__footer-block">а также <br /> <b>любые другие Ваши мероприятия</b></div>

         </div>
      </section>
   )
}

export default DecorationCategory