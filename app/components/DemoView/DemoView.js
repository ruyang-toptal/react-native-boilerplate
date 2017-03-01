import React, { Component } from 'react';
import {
  Text,
	TextInput,
  View
} from 'react-native';
import CodePush from 'react-native-code-push';
import styles from './styles.js'

export default class DemoView extends Component {
	constructor() {
		super()
		this.state = {name:'Samer'}
	}

	componentDidMount() {
	    CodePush.sync({installMode: CodePush.InstallMode.ON_NEXT_RESUME});
	}

	render() {
    return (
      <View style={styles.container}>
      	<View style={styles.inputRow}>
	        <Text style={styles.question}>Hello, </Text>
	        <TextInput style={[styles.input, styles.name]}
          	placeholder="your name"
          	value={this.state.name}
          	onChangeText={(name)=>this.setState({name})}/>
      	</View>
        <View style={styles.inputRow}>
	        <Text style={styles.question}>What do you like?</Text>
	        <TextInput style={[styles.input, styles.favorite]}
          	placeholder="favorite food, place, etc"
          	value={this.state.favorite}
          	onChangeText={(favorite)=>this.setState({favorite})}/>
        </View>
        <View style={styles.inputRow}>
	        <Text style={styles.question}>Why?</Text>
	        <TextInput style={[styles.reason]}
	        	underlineColorAndroid='transparent'
	        	multiline={true}
	        	numberOfLines={4}
          	placeholder="reason"
          	value={this.state.reason}
          	onChangeText={(reason)=>this.setState({reason})}/>
        </View>
        <Text style={styles.conclusion}>
        {`${this.state.name} likes ${this.state.favorite || "___"} because ${this.state.reason || "___"}.`}
        </Text>
        <Text>I recommend banana.</Text>
        <Text>Because apple a day keeps doctor away.</Text>
      </View>
    );
  }
}