import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from '../components/Header';

export class Notifications extends Component {
  render() {
    return (
      <View>
        <Header />

        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default Notifications;
