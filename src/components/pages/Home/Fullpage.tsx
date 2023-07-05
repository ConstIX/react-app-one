import React from 'react';

import image1 from '../../../assets/img/categories/01.jpg'
import image2 from '../../../assets/img/categories/02.jpg'
import image3 from '../../../assets/img/categories/03.jpg'
import image4 from '../../../assets/img/categories/04.jpg'
import logo from '../../../assets/img/logo-main.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const fullscreen = [image1, image2, image3, image4]

const Fullpage: React.FC = () => {
   return (
      <section className="fullpage">

         <div className="fullpage__body">
            <div className="fullpage__item">
               <div className="fullpage__image"><img src={logo} alt="..." /></div>
               <div className="fullpage__title">Реализуем проекты любой сложности – от стандартных бюджетных конструкций до концептуальных пространственных решений.</div>
            </div>
         </div>

      </section>
   )
}

export default Fullpage