import React from 'react';
import './Levels.css';
import Level from './Level';
import {NavLink} from 'react-router-dom';

function Levels() {
  return (
    <div className='levels'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <NavLink to={'level1'}>
              <Level
                src='https://i.pinimg.com/originals/00/24/38/0024380c5c0fae1fedd49085bee7ab73.jpg'
                text='100/200 coins'
                label='01'
              />
            </NavLink>
            <NavLink to={'level2'}>
              <Level
                src='https://media.wired.com/photos/61d3854077dd73ac042d43cb/master/pass/Games-Celeste.jpg'
                text='500/500 coins'
                label='02'
              />
            </NavLink>
           
      <Level
              src='https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png'
              text='Unlock'
              label='03'
            />
      <Level
              src='https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png'
              text='Locked'
              label='04'
            />
          </ul>
      <ul className='cards__items'>
            <Level
              src='https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png'
              text='Locked'
              label='05'
            />
            <Level
              src='https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png'
              text='Locked'
              label='06'
            />
      <Level
              src='https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png'
              text='Locked'
              label='07'
            />
      <Level
              src='https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png'
              text='Locked'
              label='08'
            /></ul>
      <ul className='cards__items'>
            <Level
              src='https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png'
              text='Locked'
              label='09'
            />
            <Level
              src='https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png'
              text='Locked'
              label='10'
            />
      <Level
              src='https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png'
              text='Locked'
              label='11'
            />
      <Level
              src='https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png'
              text='Locked'
              label='12'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Levels;