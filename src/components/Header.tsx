import React from 'react'

const Header: React.FC = () => {

   const [menu, setMenu] = React.useState<boolean>(false)

   return (
      <header className="header">
         <div className="container">
            <div className="header__body">

               <div className="header__column">

                  <div onClick={() => setMenu(!menu)} className={`menu__icon icon-menu ${menu ? 'active' : ''}`}>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>

                  <nav className={`menu__body ${menu ? 'active' : ''}`}>
                     <ul className="menu__list">
                        <li><a href="" className="menu__link"><span>Home</span></a></li>
                        <li><a href="" className="menu__link"><span>About</span></a></li>
                        <li><a href="" className="menu__link"><span>Blog</span></a></li>
                        <li><a href="" className="menu__link"><span>Training</span></a></li>
                     </ul>
                  </nav>

               </div>

               <div className="header__column">
                  <a href="" className="header__logo"><img src="" alt="" /></a>
               </div>

            </div>
         </div>
      </header>
   )
}

export default Header