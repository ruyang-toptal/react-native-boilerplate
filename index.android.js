/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import DemoView from './app/components/DemoView';


export default class liwwa extends Component {
  render() {
    return (<DemoView/>)
  }
}

AppRegistry.registerComponent('liwwa', () => liwwa);
