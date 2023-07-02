import React from 'react'

type FeaturesBlockProps = { image: string, title: string, text: string }

const FeaturesBlock: React.FC<FeaturesBlockProps> = ({ image, title, text }) => {
   return (
      <div className="features__column">
         <div className="features__item">
            <div className="features__icon"><img src={image} alt="" /></div>
            <div className="features__title">{title}</div>
            <div className="features__text">{text}</div>
         </div>
      </div>
   )
}

export default FeaturesBlock