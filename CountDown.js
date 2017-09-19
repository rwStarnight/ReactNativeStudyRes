import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'

class CountDown extends Component {
  state = {
    count: 30,
  };
  renderResult = () => {
    const { count } = this.state;
    if (count > 0){
      return(
        <Text>{count}</Text>
        )
    }
    else{
      return<Text>Time's up!</Text>
    }
  };
  render() {
    const { count } = this.state;
    return (
        <View>{this.renderResult()}</View>
    )
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      const { count } = this.state;
      if (count === 0) {
        return clearInterval(this.timer);
      }
      this.setState({
        count: count - 1,
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

class App extends Component {
  render() {
    return (
      <View>
        <CountDown />
      </View>
    )
  }

}

AppRegistry.registerComponent('App', () => App)
