import React from 'react';
import './index.scss';
import { Card } from '../Card';

const CardData = [
  {
    title: 'Title goes here',
    desc: 'A description of the card',
    imgUrl: '/logo512.png',
  },
  {
    title: 'Title goes here',
    desc: 'A description of the card',
    imgUrl: '/logo512.png',
  },
  {
    title: 'Title goes here',
    desc: 'A description of the card',
    imgUrl: '/logo512.png',
  },
  {
    title: 'Title goes here',
    desc: 'A description of the card',
    imgUrl: '/logo512.png',
  },
];

export const Cards: React.FC = () => {
  return (
    <div className='cards'>
      {CardData.map((data) => (
        <Card {...data} justify='center' />
      ))}
    </div>
  );
};
