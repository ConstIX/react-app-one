import React from 'react'

import { Link } from 'react-router-dom'
import { links } from '../data'

const Header: React.FC = () => {

   const [navbar, setNavbar] = React.useState({ menu: false, color: false })

   navbar.menu && document.documentElement.clientWidth < 992.98 ? document.body.classList.add('lock') : document.body.classList.remove('lock')

   window.addEventListener('scroll', function () {
      const header = document.querySelector('.header')
      header?.classList.toggle('sticky', window.scrollY > 0)
   })

   return (
      <header className="header">
         <div className="container">
            <div className="header__body">

               <div className="header__column">
                  <Link to="/" className="header__logo">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 15">
                        <g fill='#FFFFFF'>
                           <polygon points="22.18,0.19 15.46,9.85 8.65,0.1 0.11,12.68 2.05,12.65 8.65,2.95 15.41,12.65 22.2,2.91 28.83,12.63 30.79,12.63 " />
                           <polygon points="32.43,12.63 40.93,0.12 39.04,0.12 32.44,9.82 25.84,0.12 23.95,0.12 " />
                        </g>
                     </svg>
                  </Link>
               </div>

               <div className="header__column">
                  <div onClick={() => setNavbar({ ...navbar, menu: !navbar.menu })} className={`menu__icon icon-menu ${navbar.menu ? 'active' : ''}`}>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>

                  <nav className={`menu__body ${navbar.menu ? 'active' : ''}`}>
                     <ul className="menu__list">
                        {links.map(obj => <li onClick={() => setNavbar({ ...navbar, menu: !navbar.menu })} key={obj.text}><Link to={obj.link} className="menu__link"><span>{obj.text}</span></Link></li>)}
                     </ul>
                     <a href='tel:+7 (985)-889-17-88' className="header__phone menu__phone">+7 (985)-889-17-88</a>
                  </nav>
               </div>

               <div className="header__column">
                  <a href='tel:+7 (985)-889-17-88' className="header__phone header__phone_l">+7 (985)-889-17-88</a>
               </div>

            </div>
         </div>
      </header>
   )
}

export default Header