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
  add = (time) => {
    this.setState({
      count: this.state.count + time
    })
  }
  timeup = () =>{
    alert('时间到！');
    this.props.timeupParent && this.props.timeupParent('子组件传回的参数' + this.state.test);
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      const { count } = this.state;
      if (count === 0) {
        this.timeup();
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
  timeupParent = (param) => {
    alert('抓紧时间')
  }
  state = {
    arr: [1,2,3]
  }
  render() {
    return (
      <View>
      {
        this.state.arr.map(i => {
          return<CountDown key{i} timeupParent={(child) => this.timeupParent('父组件用于区分的参数' + i,child)} />
        })
      }
      </View>
    )
  }

}

AppRegistry.registerComponent('App', () => App)
