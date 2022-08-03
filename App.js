import 'react-native-gesture-handler';
import React from 'react';
// import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
// import ColorBox from "./components/ColorBox";
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
