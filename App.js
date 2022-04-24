import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

//screens
import Dashboard from './src/screens/Dashboard';
import Detail from './src/screens/Detail';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{headerShown : false}}
                initialRouteName="Dashboard"
            >
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})