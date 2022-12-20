
import React from 'react';
import './index.scss';

interface IGrid {
  children?: React.ReactNode;
}

export const Grid: React.FC<IGrid> = ({ children }) => {
  return <div className='grid'>{children}</div>;
};

