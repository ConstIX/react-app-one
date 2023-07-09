import React from 'react'
import { Link } from 'react-router-dom'

type ServicesBlockProps = { image: string, title: string, id: number }

const ServicesBlock: React.FC<ServicesBlockProps> = ({ image, title, id }) => {
   return (
      <div className="type__column">
         <div className="type__item item">
            <div className="item__image"><img src={image} alt="..." /></div>
            <Link to={`/services/${id}`}><h3>{title}</h3></Link>
         </div>
      </div>
   )
}

export default ServicesBlock