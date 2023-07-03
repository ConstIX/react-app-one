import React from 'react'
import { useLocation } from 'react-router-dom'

const About: React.FC = () => {

   const { pathname } = useLocation()

   return (
      <section className={`about ${pathname === '/about' ? 'about_l' : ''}`}>
         <div className="container">

            <div className="about__header-block header-block">
               <div className="header-block__title">О компании MVcreative</div>
               <div className="header-block__text">Застройка площадок для выставочных, спортивных, корпоративных и частных мероприятий – наша основная специализация. В каждом сезоне появляются новые тренды и стандарты. Мы амбициозная компания, которая всегда идет вперед и делает ставку на свежие идеи.</div>
            </div>

            <div className="about__body"></div>

         </div>
      </section>
   )
}

export default About