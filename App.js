import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';


const handleClick = () => {
	
	console.log("click");
}

const App = ()  => {
  
console.log("OK");

  return (
    <Button
	  onPress={handleClick}
	  title="Press Me"
	/>
  );
};

const styles = StyleSheet.create({
	 container: {
    flex: 1,

  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
