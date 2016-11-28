import React, { Component } from 'react';
import Layout from './Layout';
import Counter from './Counter';
import Test from './Test.jsx';
import Poop from './Poop';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Test />
        <Poop />
        <Counter />
      </Layout>
    );
  }
}
