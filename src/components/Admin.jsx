import React, { Component } from 'react';
import TopBar from './TopBar';
import styles from '../assets/jss/Admin';
import Main from './Main';
import { withStyles } from '@material-ui/core/styles';
import SideBar from './SideBar';
import TopDrawer from './TopDrawer';
import Divider from '@material-ui/core/Divider';
import DrawerList from './DrawerList';
class Admin extends Component {
  state = { drawerOpen: false };

  handleToggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <TopBar
          drawerOpen={this.state.drawerOpen}
          onClick={this.handleToggleDrawer}
        />

        <SideBar drawerOpen={this.state.drawerOpen}>
          <div className={classes.appBarSpacer}>
            <TopDrawer onClick={this.handleToggleDrawer} theme={theme} />
          </div>
          <Divider />
          <DrawerList />
        </SideBar>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Main />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Admin);
