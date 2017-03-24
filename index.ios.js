/**
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Exnav from './src/components/Exnav';

export default class firstProject extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      // Exnav traces out all of the routes used in the application
      <Exnav />
    );
  }
}


AppRegistry.registerComponent('firstProject', () => firstProject);
