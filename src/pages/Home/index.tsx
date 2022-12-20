import React, { Fragment } from 'react';
import { Button } from '../../components/Button';
import { Header1 } from '../../components/Header1';
import { TabDisplay } from '../../components/TabDisplay';
import demoData from '../../data/demoData';
import { Grid } from '../../components/Grid';
import { Card } from '../../components/Card';
import './index.scss';
export const Home: React.FC = () => {
  return (
    <Fragment>
      <Header1 />
      <Grid>
        {demoData.slice(0, 2).map((data) => (
          <Card {...data} />
        ))}
      </Grid>
    </Fragment>
  );
};
