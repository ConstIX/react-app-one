import React from 'react'

type BrandBlockProps = { image: string }

const BrandBlock: React.FC<BrandBlockProps> = ({ image }) => {
   return (
      <div className="brand__item">
         <img src={image} alt="..." />
      </div>
   )
}

export default BrandBlock