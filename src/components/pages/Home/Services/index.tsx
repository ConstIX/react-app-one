import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { service } from '../../../../data'
import ServicesBlock from './ServicesBlock'

const Services: React.FC = () => {

   const { pathname } = useLocation()
   const [loadMore, setLoadMore] = React.useState<number>(6)

   return (
      <section className={`type ${pathname === '/services' ? 'type_l' : ''}`}>
         <div className="container">

            <div className="type__header-block header-block">
               <div className="header-block__title">Направления работы</div>
            </div>

            <div className="type__body">
               {service.slice(0, loadMore).map(obj => <ServicesBlock key={obj.id} {...obj} />)}
            </div>

            <div className={` ${loadMore < service.length ? 'type__button' : 'type__button_n'}`}>
               {
                  pathname === '/services' ? <div onClick={() => setLoadMore(prev => prev + 3)} className='btn btn_t'><span>загрузить еще</span></div> :
                     <Link className='btn btn_t' to='/services'><span>смотреть все услуги</span></Link>
               }
            </div>

         </div>
      </section>
   )
}

export default Services