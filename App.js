import React, { useEffect } from 'react';
import * as Updates from 'expo-updates';
import Navigation from './navigation';
import { checkForUpdate } from './tools/helpers';

export default function App() {

  useEffect(() => {
    checkForUpdate()
  }, []);

  return (
    <Navigation />
  );
}