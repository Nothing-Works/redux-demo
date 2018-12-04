import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import styles from '../assets/jss/SideBar';
import Drawer from '@material-ui/core/Drawer';
const SideBar = props => {
  const { classes, drawerOpen, children } = props;
  return (
    <Drawer
      variant="permanent"
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: drawerOpen,
        [classes.drawerClose]: !drawerOpen
      })}
      classes={{
        paper: classNames(classes.background, {
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen
        })
      }}
      open={drawerOpen}
    >
      {children}
    </Drawer>
  );
};

export default withStyles(styles, { withTheme: true })(SideBar);
