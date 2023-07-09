import React from 'react'

import { Link, useLocation } from 'react-router-dom'
import { portfolio } from '../../../data'

const Portfolio: React.FC = () => {

   const { pathname } = useLocation()
   const [data, setData] = React.useState<{ img: string, idx: number, portfolio: string[] }>({ img: '', idx: 0, portfolio })
   const [load, setLoad] = React.useState<number>(6)

   const lockBody = data.img && pathname === '/portfolio'
   lockBody ? document.body.classList.add('lock') : document.body.classList.remove('lock')

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
                     data.img && pathname === '/portfolio' &&
                     <div className='portfolio__modal'>
                        <button onClick={() => imageAction('close-img')}>
                           <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" /></svg>
                        </button>
                        <button onClick={() => imageAction('prev-img')}>
                           <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z" /></svg>
                        </button>
                        <button onClick={() => imageAction('next-img')}>
                           <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z" /></svg>
                        </button>
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

               <div className={` ${load < portfolio.length ? 'portfolio__button' : 'portfolio__button_n'}`}>
                  {
                     pathname === '/portfolio' ? <div onClick={() => setLoad(prev => prev + 3)} className='btn btn_p'><span>загрузить еще</span></div> :
                        <Link className='btn btn_p' to='/portfolio'><span>смотреть все работы</span></Link>
                  }
               </div>

            </div>
         </section>

      </>
   )
}

export default Portfolio