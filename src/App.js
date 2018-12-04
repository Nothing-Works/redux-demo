import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import { connect } from 'react-redux';
import { getAllPosts } from './actions/signals/post';
import Admin from './components/Admin';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './assets/jss/Theme';
class App extends Component {
  componentDidMount = () => {
    this.props.getAllPosts();
  };
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Admin />
      </MuiThemeProvider>
    );
  }
}

const mapState = state => {
  return {
    state
  };
};

export default connect(
  mapState,
  { getAllPosts }
)(App);
