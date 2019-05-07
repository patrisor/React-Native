/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/**
 * Importing different libraries
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

/**
 * Header: Arrow function which is stored in a parameterless function declaration
 * TODO: Insert Karma Logo
 * Color: #00FFFF
 */
export const Header = () => (
  <View style={styles.header}>
    <Text style={styles.text}>KARMA</Text> 
  </View> 
);

/**
 * TODO: Create custom footer
 * same color as header: #00FFFF
 */

/** TODO: Delete
 * You call this set of instructions to play with the User Interface Platform module
const instructions = Platform.select({
  ios: 	
  	'Press Cmd+R to reload,\n' + 
   	'Cmd+D or shake for dev menu\n' + 
	'Clubber iPhone on top of head for one trip to hell',
  android:
  	'Double tap R on your keyboard to reload,\n' +
	'Shake or press menu button for dev menu,\n' + 
	'Clubber android on top of head for one trip to hell',
});
*/

/**
 * My main function
 */
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header> 
	  leftComponent={{icon: 'menu', color: '#ffffff'}}
	  centerComponent={{text: 'KARMA', style: { color: '#ffffff'} }}
	  rightComponent={{icon: 'home', color: '#ffffff'}} 
	</Header>
      </View>
    );
  }
}

/**
 * Edit the types of styles available for the text view 
 * iPhone -> height: 76, marginTop: 24
 * Android -> height: 100, marginTop: 0
 */
const styles = StyleSheet.create({
  // TODO: Decide if you do not need and delete
  header: {
   height: Platform.OS === 'android' ? 76 : 100,
   marginTop: Platform.OS === 'ios' ? 0 : 24,
   backgroundColor: '#00ffff',
   alignItems: 'center',
   justifyContent: 'center'
  },
  text: {
   color: '#ffffff',
   fontSize: 24
  }
});
