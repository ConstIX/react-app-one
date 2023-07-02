import React from 'react'
import FeaturesBlock from './FeaturesBlock'

import image1 from '../../../../assets/img/features/01.svg'
import image2 from '../../../../assets/img/features/02.svg'
import image3 from '../../../../assets/img/features/03.svg'

const features = [
   { image: image1, title: 'ГАРАНТИРОВАННОЕ КАЧЕСТВО', text: 'Осуществляем контроль реализации проекта на всех этапах. Обеспечиваем высокое качество производства, стабильность конструкций и наглядную визуализацию. Весь цикл производства проходит в собственной мастерской.' },
   { image: image2, title: 'ИНДИВИДУАЛЬНЫЙ ПОДХОД', text: 'Разрабатываем все проекты с нуля для каждого Клиента. Тщательно продумываем концепцию и подачу. Учитаваем все пожелания наших клиентов. Создаем уникальные декорации с максимальным вниманием к деталям.' },
   { image: image3, title: 'ДЕМОКРАТИЧНЫЕ ЦЕНЫ', text: 'Благодаря собственному производству устанавливаем адекватные цены на изготовление и установку конструкций, мебели и стендов. Составляем прозрачную смету для клиентов. Предоставляем скидки при масштабных заказах и регулярном сотрудничестве.' }
]

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