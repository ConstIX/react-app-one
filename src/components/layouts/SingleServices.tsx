import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { service } from '../../data'

const SingleServices = () => {

   let { id } = useParams()
   const [single, setSingle] = React.useState(service[Number(id) - 1])
   console.log(setSingle)

   return (
      <section className="single-type">
         <div className="container">

            <div className="single-type__header-block header-block">
               <div className="header-block__title">{single.title}</div>
            </div>

            <div className="single-type__body">
               <div className="single-type__item">
                  <div className="single-type__text">{single.text_one}</div>
                  <div className="single-type__text">{single.text_two}</div>
                  <div className="single-type__text">{single.text_three}</div>
               </div>

               <div className="single-type__button">
                  <Link className='btn btn_s' to='/services'>
                     <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill="rgb(214, 214, 214)"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" /></svg>
                     <span>вернуться назад</span>
                  </Link>
               </div>
            </div>



         </div>
      </section>
   )
}

export default SingleServices