import React from 'react'
import { useLocation } from 'react-router-dom'

const Portfolio: React.FC = () => {

   const { pathname } = useLocation()

   return (
      <section className={`portfolio ${pathname === '/portfolio' ? 'portfolio_l' : ''}`}>
         <div className="container">

            <div className="portfolio__header-block header-block">
               <div className="header-block__title">Портфолио</div>
               <div className="header-block__text">Предлагаем ознакомиться с уже выполненными проектами. Каждый из них – это результат работы целой команды специалистов, от проектировщиков до мастеров цехов.</div>
            </div>

            <div className="portfolio__body"></div>

         </div>
      </section>
   )
}

export default Portfolio