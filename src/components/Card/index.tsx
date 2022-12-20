import React, { useMemo } from 'react';
import './index.scss';

interface ICard {
  imgUrl?: string;
  title?: string;
  desc?: string;
  justify?: 'left' | 'center' | 'right';
}

export const Card: React.FC<ICard> = ({ imgUrl, title, desc, justify }) => {
  const justifyContent = useMemo(() => {
    switch (justify) {
      case 'left':
        return 'flex-start';
      case 'center':
        return 'center';
      case 'right':
        return 'flex-end';
    }
  }, [justify]);

  return (
    <div className='root' style={{ justifyContent }}>
      <img src={imgUrl} alt='' />
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};
