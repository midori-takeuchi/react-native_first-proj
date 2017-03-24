/**
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import ExNav from './src/components/Exnav';

export default class firstProject extends Component {
  render() {
    return (
      // Exnav traces out all of the routes used in the application
      <Exnav />
    )
  }
}


AppRegistry.registerComponent('firstProject', () => firstProject);
