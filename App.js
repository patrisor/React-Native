/**
 * KARMA v.1
 * author: patrisor, alkozma
 */

/**
 * Importing different libraries
 */
import React, {Component} from 'react';
import {TouchableOpacity, Alert, Button, Platform, StyleSheet, Text, View} from 'react-native';

/**
 * Header: Arrow function which is stored in a parameterless function declaration
 * TODO: Insert Karma Logo
 * Color: #00FFFF
 */
export const Header = () => (
  <View style={styles.header}>
    <Text style={styles.text}>KARMA v.1</Text> 
  </View> 
);

// TODO: Logic to keep iterating a number by 1 then converting it into a string and back
export const onPressButton = () => {
 this.setState({number: this.state.number + 1})
}

/**
 * My main Class
 */
type Props = {};
export default class App extends Component<Props> {
  
  // Constructor
  constructor() {
   super()
   this.state = {
    number: 0
   }
  }
  
  // Main Function
  render() {
   return [
      // Header
      <View>
        <Header>{}</Header>
      </View>,
      // Button
      <TouchableOpacity style={styles.button}>
	<Text></Text>
      </TouchableOpacity>,
      // Footer
      <View style={styles.footer}>{}</View>,
      // Text on top of the screen
      <View style={styles.counterView}>
        <Text style={styles.counter}>{this.state.number.toString()}</Text>
      </View>
    ];

   /* TODO: Convert what you have above (render() returns an array of individually created
            objects) into this format for return \/
    return (
      <View style={styles.container}>
        // Header
        <View>
          <Header>{}</Header>
        </View>
        // Button
        <View style={styles.button}>
          <Button title="KARMA"/>
        </View>
        // Footer
        <View style={styles.footer}>{}</View>
      </View>
    );
    */
  }
}

/**
 * Edit the types of styles available for the current state of your objects
 * iPhone -> height: 76, marginTop: 24
 * Android -> height: 100, marginTop: 0
 */
const styles = StyleSheet.create({
  header: {
   height: Platform.OS === 'android' ? 76 : 100,
   marginTop: Platform.OS === 'ios' ? 0 : 4,
   backgroundColor: '#00ffff',
   alignItems: 'center',
   justifyContent: 'center'
  },
  footer: {
   flex: 1,
   width: '100%',
   height: 30,
   backgroundColor: '#00ffff',
   position: 'absolute',
   bottom: 0
  },
  text: {
   color: '#ffffff',
   fontSize: 35,
   top: 25
  },
  button: {
   // Attributes
   backgroundColor: '#00ffff',
   borderColor: '#00B3B3',
   borderWidth: 5,
   height: 150,
   width: 150,
   // Use absolute position to put objects wherever you want
   position: 'absolute',
   bottom: 50,
   alignSelf: 'center',
  },
  counterView: {
   // Position
   alignSelf: 'center',
   top: 25
  },
  counter: {
   color: '#00ffff',
   fontSize: 50,
   fontWeight: 'bold',
  }
});
