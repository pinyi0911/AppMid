import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import Navigation from './src/navigation';
import { Provider } from "react-redux";
import {store} from "./redux/store";
const App = () => {
  return (
    <SafeAreaProvider >
        <Provider store={store}>
        <NativeBaseProvider >
          <Navigation />  
        </NativeBaseProvider>
        </Provider>

    </SafeAreaProvider>

  );
}

export default App;