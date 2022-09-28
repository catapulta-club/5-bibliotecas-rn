import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {Navigation} from './navigation';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        translucent
        backgroundColor="#5cf2ac"
        barStyle="dark-content"
      />
      <Navigation />
    </NativeBaseProvider>
  );
}
