import React, {ReactNode} from 'react';
import './index.scss';
import cls from 'classnames';

interface IAlignItems {
  children: ReactNode | ReactNode[];
  horizontal?: 'left' | 'center' | 'right' | 'space-evenly' | 'space-between';
  vertical?: 'top' | 'center' | 'bottom';
  direction?: 'column' | 'row';
}

export const AlignItems: React.FC<IAlignItems> = ({
  children,
  horizontal,
  vertical,
  direction,
}) => {
  return <div className='root'>{children}</div>;
};
