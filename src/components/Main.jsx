import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../assets/jss/Main';
import { RouteWithSubRoutes, routes } from '../route';
import { Switch, Redirect } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </div>
  );
};

export default withStyles(styles)(Main);
