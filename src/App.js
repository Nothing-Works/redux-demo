import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import { connect } from 'react-redux';
import { getAllPosts } from './actions/signals/post';

class App extends Component {
  componentDidMount = () => {
    this.props.getAllPosts();
  };
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <h1>hello world</h1>
      </React.Fragment>
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
