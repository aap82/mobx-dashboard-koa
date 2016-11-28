require('./style.scss');
import React, { Component } from 'react';
import Layout from './components/Layout';
import Poop from './Poop';

class App extends Component {
  render() {
    return (
      <Layout >
        <Poop />
      </Layout>
    );
  }
}

module.exports = App;