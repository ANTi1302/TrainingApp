import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductFlaxlist from './ProductFlaxlist';
import FiveActivity from '../FiveActivity';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{title: 'Danh sách sản phẩm'}}component={ProductFlaxlist} />
        <Stack.Screen name="Details" options={{title: 'Thông tin chi tiết'}} component={FiveActivity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;