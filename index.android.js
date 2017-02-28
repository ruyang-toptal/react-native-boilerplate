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
import codePush from 'react-native-code-push';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };


class liwwa extends Component {
  render() {
    return (<DemoView/>)
  }
}

export default codePush(liwwa);
AppRegistry.registerComponent('liwwa', () => liwwa);
