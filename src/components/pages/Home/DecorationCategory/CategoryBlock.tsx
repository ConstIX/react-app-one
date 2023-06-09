import React from 'react'

type CategoryBlockProps = { image: string, text: string }

const CategoryBlock: React.FC<CategoryBlockProps> = ({ image, text }) => {
   return (
      <div className="categories__column">
         <div className="categories__item item">
            <div className="item__image"><img src={image} alt="..." /></div>
            <h3>{text}</h3>
         </div>
      </div>
   )
}

export default CategoryBlock