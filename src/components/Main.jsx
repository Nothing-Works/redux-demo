import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../assets/jss/Main';
import Typography from '@material-ui/core/Typography';

const Main = props => {
  const { classes } = props;
  return <Typography paragraph>hello world</Typography>;
};

export default withStyles(styles)(Main);
