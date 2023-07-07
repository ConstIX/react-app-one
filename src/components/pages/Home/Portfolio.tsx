import React from 'react'

import { Link, useLocation } from 'react-router-dom'
import { portfolio } from '../../../data'

const Portfolio: React.FC = () => {

   const { pathname } = useLocation()
   const [data, setData] = React.useState<{ img: string, idx: number, portfolio: string[] }>({ img: '', idx: 0, portfolio })
   const [load, setLoad] = React.useState<number>(9)

   const viewImage = (img: string, idx: number) => {
      setData({ img, idx, portfolio })
   }

   const imageAction = (action: string) => {
      let i = data.idx

      if (action === 'next-img') {
         setData({ ...data, img: data.portfolio[i + 1], idx: i + 1 })
      }
      if (action === 'prev-img') {
         setData({ ...data, img: data.portfolio[i - 1], idx: i - 1 })
      }
      if (action === 'close-img') {
         setData({ ...data, img: '', idx: 0 })
      }
   }

   return (
      <>
         <section className={`portfolio ${pathname === '/portfolio' ? 'portfolio_l' : ''}`}>
            <div className="container">

               <div className="portfolio__header-block header-block">
                  <div className="header-block__title">Портфолио</div>
                  <div className="header-block__text">Предлагаем ознакомиться с уже выполненными проектами. Каждый из них – это результат работы целой команды специалистов, от проектировщиков до мастеров цехов.</div>
               </div>

               <div className="portfolio__body">
                  {
                     data.img &&
                     <div className='portfolio__modal'>
                        <button onClick={() => imageAction('close-img')}>X</button>
                        <button onClick={() => imageAction('prev-img')}>prev</button>
                        <button onClick={() => imageAction('next-img')}>next</button>
                        <img src={data.img} alt="..." />
                     </div>
                  }
                  {data.portfolio.slice(0, load).map((item, idx) =>
                     <div key={idx} className='portfolio__column'>
                        <div onClick={() => viewImage(item, idx)} className="portfolio__item item">
                           <div className="item__image"><img src={item} alt="..." /></div>
                        </div>
                     </div>
                  )}
               </div>

               <div className={` ${load < 30 ? 'portfolio__button' : 'portfolio__button_n'}`}>
                  {
                     pathname === '/portfolio' ? <div onClick={() => setLoad(prev => prev + 3)} className='btn btn_p'><span>загрузить еще</span></div> :
                        <Link className='btn' to='/portfolio'><span>смотреть все работы</span></Link>
                  }
               </div>

            </div>
         </section>

      </>
   )
}

export default Portfolio