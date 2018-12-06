import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from '../assets/jss/DrawerList';
import { routes } from '../route';

const DrawerList = props => {
  const { classes } = props;
  return (
    <List>
      {routes.map(route => {
        return (
          <ListItem
            key={route.path}
            button
            component={NavLink}
            exact
            to={route.path}
            activeClassName={classes.active}
          >
            <ListItemIcon>{route.icon}</ListItemIcon>
            <ListItemText primary={route.text} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default withStyles(styles, { withTheme: true })(DrawerList);
