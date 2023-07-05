import React from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import image1 from '../../../assets/img/brand/01.png'
import image2 from '../../../assets/img/brand/02.png'
import image3 from '../../../assets/img/brand/03.png'
import image4 from '../../../assets/img/brand/04.png'
import image5 from '../../../assets/img/brand/05.png'
import image6 from '../../../assets/img/brand/06.png'
import image7 from '../../../assets/img/brand/07.png'
import image8 from '../../../assets/img/brand/08.png'
import image9 from '../../../assets/img/brand/09.jpg'
import image10 from '../../../assets/img/brand/010.png'

const brands = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]

const Brand: React.FC = () => {

   return (
      <section className="brand">
         <div className="container">

            <div className="brand__header-block header-block header-block_b">
               <div className="header-block__title header-block__title_b">Наши клиенты</div>
               <div className="header-block__text header-block__text_b">Работаем на постоянной основе с компаниями из разных сфер деятельности и частными заказчиками. Мы очень ценим доверие наших клиентов и гарантируем четкость, ответственность и профессионализм</div>
            </div>

            <div className="brand__body">
               <Swiper
                  modules={[Grid, Pagination]}
                  slidesPerView={5}
                  grid={{ rows: 2 }}
                  spaceBetween={0}
                  pagination={{ clickable: true }}
                  className="mySwiper"
                  breakpoints={{
                     280: {
                        slidesPerView: 1,
                        spaceBetween: 0
                     },
                     479.98: {
                        slidesPerView: 2,
                        spaceBetween: 0
                     },
                     767.98: {
                        slidesPerView: 3,
                        spaceBetween: 0
                     },
                     992.98: {
                        slidesPerView: 5,
                        spaceBetween: 0
                     },
                  }}
               >
                  {brands.map((i, idx) => <SwiperSlide key={idx}><div className="brand__item"><img src={i} alt="..." /></div></SwiperSlide>)}
               </Swiper>
            </div>

         </div>

      </section>
   )
}

export default Brand