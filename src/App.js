import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getAllPosts } from './actions/signals/post';

class App extends Component {
  componentDidMount = () => {
    this.props.getAllPosts();
  };
  render() {
    return <h1>hello world</h1>;
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
