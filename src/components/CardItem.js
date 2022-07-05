import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
      <div className = "column">
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Character Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <p className='cards__item__text'>{props.text}</p>
      <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--medium'
        >
          {props.button_text}
        </Button>
          </div>
      
      </div>
      </li>
    </>
  );
}

export default CardItem;