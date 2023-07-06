import React from 'react'
import FeaturesBlock from './FeaturesBlock'

import { features } from '../../../../data'

const Features: React.FC = () => {
   return (
      <section className="features">
         <div className="container ">

            <div className="features__header-block header-block">
               <div className="header-block__title">Почему выбирают нас</div>
               <div className="header-block__text">Наша компания работает по новым стандартам в застройке и оформлении выставок, презентаций, фэшн-показов, фестивалей, свадеб и юбилеев. Используем только современные технические, архитектурно-планировочные и визуальные средства.</div>
            </div>

            <div className="features__body">
               {features.map((obj, idx) => <FeaturesBlock key={idx} {...obj} />)}
            </div>

         </div>
      </section>
   )
}

export default Features