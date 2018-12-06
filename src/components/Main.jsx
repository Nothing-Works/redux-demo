import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../assets/jss/Main';
import { RouteWithSubRoutes, routes } from '../route';

const Main = () => {
  return (
    <div>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  );
};

export default withStyles(styles)(Main);
