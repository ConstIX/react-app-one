import React from 'react'

type PortfolioBlockProps = { image: string }

const PortfolioBlock: React.FC<PortfolioBlockProps> = ({ image }) => {
   return (
      <div className='portfolio__column'>
         <div className="portfolio__item item">
            <div className="item__image"><img src={image} alt="..." /></div>
         </div>
      </div>
   )
}

export default PortfolioBlock