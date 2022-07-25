import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Main from './src/Main';
import { NativeRouter } from 'react-router-native';
import { StateProvider } from './src/state/state';
import { reducer } from './src/state/reducer';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <>
    <NativeBaseProvider>
      <NativeRouter>
        <StateProvider reducer={reducer}>
          <Main/>
        </StateProvider>  
      </NativeRouter>  
    </NativeBaseProvider>
    <StatusBar style='auto'/>
    </>
  );
}