import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Image, ActivityIndicator, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Text, View, Button, TextInput } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [api_key, setRealApiKey] = useState('');
  const [apiKey, setApiKey] = useState('');

  const saveValue = () => {
    save_api_key(apiKey)
  }

  const save_api_key = async (value) => {  
    try {    
      console.log('saving api_key = ' + value)
      await AsyncStorage.setItem('@api_key', value)  
    } catch (e) {    
      // saving error  
    }
  }

  const load_api_key = async () => {  
    try {    
      const value = await AsyncStorage.getItem('@api_key')
      if (value !== null) {      
        // value previously stored   
        console.log('loading key = ' + value)
        setRealApiKey(value) 
      }  
    } catch(e) {    
      // error reading value  
    }
  }

  const remove_api_key = async () => {
    try {
      await AsyncStorage.removeItem('@api_key')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }

  const updateApiKey = (text) => {
    setApiKey(text)
    setRealApiKey(text)
  }

  useEffect(() => {
    load_api_key()
  }, [])
  

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <Text style={styles.apiLabel}>Enter your API key here.</Text>
        <TextInput style={styles.apiInput} onChangeText={text => updateApiKey(text)} value={api_key} />

        <TouchableOpacity style={styles.button} onPress={saveValue}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    maxWidth: 400,
  },
  apiLabel: {
    fontWeight: '700',
  },
  apiInput: { 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginTop: 10, 
    paddingHorizontal: 10, 
  },
  button: {
    backgroundColor: '#0000ff',
    padding: 8,
    marginTop: 20,
    borderRadius: 15,
    height: 40,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  }
});