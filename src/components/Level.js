import React from 'react';
import { Link } from 'react-router-dom';

function Level(props1) {
  return (
    <>
      <li className='cards__item'>
      <div className = "column">
          <figure className='cards__item__pic-wrap' data-category={props1.label}>
            <img
              className='cards__item__img'
              alt='Character Image'
              src={props1.src}
            />
          </figure>
          <div className='levels__item__info'>
            <p className='cards__item__text'>{props1.text}</p>
          </div>
      </div>
      </li>
    </>
  );
}

export default Level;