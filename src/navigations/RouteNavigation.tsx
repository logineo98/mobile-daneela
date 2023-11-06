import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// my importations
import Drawer from './stacks/Drawer'

const RouteNavigation = () => {
    const Root = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Root.Navigator screenOptions={{ headerShown: false }}>
                <Root.Screen name='main' component={Drawer} />
            </Root.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})

export default RouteNavigation