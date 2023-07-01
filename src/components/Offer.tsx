import React from 'react'

const Offer: React.FC = () => {
   return (
      <section className="offer">
         <div className="offer__body">
            <div className="offer__title">Хотите получить предложение? <br /> отправьте нам ваше имя и телефон</div>
            <a href="#message" className="offer__btn">Отправить сообщение</a>
         </div>
      </section>
   )
}

export default Offer