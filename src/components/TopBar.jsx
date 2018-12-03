import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from '../assets/jss/TopBar';

const TopBar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <ToolBar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" color="inherit" className={classes.grow}>
            DashBoard
          </Typography>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(TopBar);
