import React from "react"
import BrandBlock from './BrandBlock'

import image1 from '../../../../assets/img/brand/01.png'
import image2 from '../../../../assets/img/brand/02.png'
import image3 from '../../../../assets/img/brand/03.png'
import image4 from '../../../../assets/img/brand/04.png'
import image5 from '../../../../assets/img/brand/05.png'
import image6 from '../../../../assets/img/brand/06.png'
import image7 from '../../../../assets/img/brand/07.png'
import image8 from '../../../../assets/img/brand/08.png'
import image9 from '../../../../assets/img/brand/09.jpg'
import image10 from '../../../../assets/img/brand/010.png'

const brands = [{ image: image1 }, { image: image2 }, { image: image3 }, { image: image4 }, { image: image5 }, { image: image6 }, { image: image7 }, { image: image8 }, { image: image9 }, { image: image10 }]

const Brand: React.FC = () => {
   return (
      <section className="brand">
         <div className="container">

            <div className="brand__header-block header-block">
               <div className="header-block__title header-block__title_b">Наши клиенты</div>
               <div className="header-block__text header-block__text_b">Работаем на постоянной основе с компаниями из разных сфер деятельности и частными заказчиками. Мы очень ценим доверие наших клиентов и гарантируем четкость, ответственность и профессионализм</div>
            </div>

            <div className="brand__body">
            </div>

         </div>
      </section>
   )
}

export default Brand