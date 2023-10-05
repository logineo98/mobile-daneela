import { StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
// my importations
import Home from '../../views/Home'
import Header from '../../components/common/Header'
import DrawerContent from '../../components/drawer/DrawerContent'
import PolitiqueUtilisation from '../../views/PolitiqueUtilisation'
import Detail from '../../views/Detail'

const Drawer = () => {
    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator
            drawerContent={({ navigation }) => (<DrawerContent navigation={navigation} />)}
            screenOptions={{
                header: ({ navigation }) => (<Header navigation={navigation} />)
            }}
        >
            <Drawer.Screen name='home' component={Home} />
            <Drawer.Screen name='detail' component={Detail} />
            <Drawer.Screen name='politique_utilisation' component={PolitiqueUtilisation} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({})

export default Drawer