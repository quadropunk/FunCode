import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../media/1.jpg')}
              text=''
              label='PyPy'
      button_text="Select"
      
            />
            <CardItem
             src={require('../media/2.jpg')}
              text='500 coins'
              label='Sharpie'
      button_text="Buy"
            />
      <CardItem
              src={require('../media/3.jpg')}
              text='750 coins'
              label='Javka'
      button_text="Buy"
            />
      <CardItem
             src={require('../media/1.jpg')}
              text='1000 coins'
              label='Plusie'
      button_text="Buy"
            />
          </ul>
      
        </div>
      </div>
    </div>
  );
}

export default Cards;