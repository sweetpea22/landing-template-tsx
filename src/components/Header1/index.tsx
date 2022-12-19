import React from 'react';
import './index.scss';

interface INavLink {
  id?: number;
  name: string;
  linkUrl: string;
}

const linksData: INavLink[] = [
  {
    id: 0,
    name: 'Brand',
    linkUrl: '#about',
  },
  {
    id: 1,
    name: 'Usage',
    linkUrl: '#install',
  },
  {
    id: 2,
    name: 'Docs',
    linkUrl: 'hhttps://github.com/',
  },
  {
    id: 3,
    name: 'Demo',
    linkUrl: 'https://github.com/',
  },
  {
    id: 4,
    name: 'GitHub',
    linkUrl: 'https://github.com/',
  },
];

export const Header1: React.FC = () => {
  return (
    <div className='nav'>
      <div className='nav--links-wrapper'>
        {linksData.map(({ name, linkUrl }, index) => (
          <a href={linkUrl} className='nav-link' key={index}>
            {name}
          </a>
        ))}
      </div>
    </div>
  );
};
