import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from '../assets/jss/TopBar';

const TopBar = props => {
  const { classes, drawerOpen, onClick } = props;

  return (
    <AppBar
      className={classNames(classes.appBar, {
        [classes.appBarShift]: drawerOpen
      })}
    >
      <ToolBar disableGutters={!drawerOpen}>
        <IconButton
          className={classNames(classes.menuButton, {
            [classes.hide]: drawerOpen
          })}
          color="inherit"
          aria-label="Open drawer"
          onClick={onClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          DashBoard
        </Typography>
      </ToolBar>
    </AppBar>
  );
};

export default withStyles(styles, { withTheme: true })(TopBar);
