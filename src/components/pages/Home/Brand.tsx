import React from "react"
import { brands } from "../../../data";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

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