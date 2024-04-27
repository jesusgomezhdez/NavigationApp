/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import { StackNagigator } from './presentation/routes/StackNavigator';



function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StackNagigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
