import React, { Fragment } from 'react';
import { Button } from '../../components/Button';
import { Header1 } from '../../components/Header1';
import { TabDisplay } from '../../components/TabDisplay';
import './index.scss';
export const Home: React.FC = () => {
  return (
    <Fragment>
      <Header1 />
      <h1>Hello</h1>
      <Button>
        <a href='google.com'>Hello</a>
      </Button>
      <TabDisplay />
    </Fragment>
  );
};
