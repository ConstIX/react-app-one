import React from 'react'
import { useParams } from 'react-router-dom'
import { service } from '../../data'

const SingleServices = () => {

   let { id } = useParams()
   const [single, setSingle] = React.useState(service[Number(id) - 1])

   return (
      <section className="single-type">
         <div className="container">

            <div className="single-type__header-block header-block">
               <div className="header-block__title">{single.title}</div>
            </div>

            <div className="single-type__body">
               <div className="single-type__text">{single.text_one}</div>
               <div className="single-type__text">{single.text_two}</div>
               <div className="single-type__text">{single.text_three}</div>
            </div>

         </div>
      </section>
   )
}

export default SingleServices