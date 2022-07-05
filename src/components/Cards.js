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
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRZxX_eweVT37FoFLJ0devo8SqYfjV4DCmg&usqp=CAU'
              text=''
              label='PyPy'
      button_text="Select"
      
            />
            <CardItem
              src='https://img.freepik.com/free-vector/8-bit-pixel-pig-animal-game-assets-cross-stitch-patterns-vector-illustrations_614713-735.jpg?w=2000'
              text='500 coins'
              label='Sharpie'
      button_text="Buy"
            />
      <CardItem
              src='https://st4.depositphotos.com/18415712/20353/v/600/depositphotos_203538884-stock-illustration-pixel-art-siberian-husky-dog.jpg'
              text='750 coins'
              label='Javka'
      button_text="Buy"
            />
      <CardItem
              src='https://st2.depositphotos.com/2400497/10405/v/950/depositphotos_104057022-stock-illustration-cartoon-fox-character.jpg'
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