import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './navigation';

function App() {
  return (
    <NavigationContainer>
        <Navigation />
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {

  }
});