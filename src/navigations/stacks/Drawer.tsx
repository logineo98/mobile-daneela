import { StyleSheet } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { ParamListBase, RouteProp, getFocusedRouteNameFromRoute } from '@react-navigation/native'
// my importations
import Home from '../../views/Home'
import Header from '../../components/common/Header'
import DrawerContent from '../../components/drawer/DrawerContent'
import PolitiqueUtilisation from '../../views/PolitiqueUtilisation'
import Detail from '../../views/Detail'
import Recherche from '../../views/Recherche'
import Categorie from '../../views/Categorie'

type COMPONENT_TYPE = { route: RouteProp<ParamListBase, 'main'> }

const Drawer: FC<COMPONENT_TYPE> = ({ route }) => {
    const Drawer = createDrawerNavigator()

    const [screenName, setScreenName] = useState('')

    useEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route)
        setScreenName(routeName as string)
    }, [route])

    return (
        <Drawer.Navigator
            drawerContent={({ navigation }) => (<DrawerContent navigation={navigation} />)}
            screenOptions={{
                header: ({ navigation }) => (<Header navigation={navigation} />)
            }}
        >
            <Drawer.Screen name='home' children={({ navigation }) => <Home navigation={navigation} screenName={screenName} />} />
            <Drawer.Screen name='detail' children={({ navigation }) => <Detail navigation={navigation} screenName={screenName} />} />
            <Drawer.Screen name='categorie' children={({ navigation }) => <Categorie navigation={navigation} screenName={screenName} />} />
            <Drawer.Screen name='recherche' children={({ navigation }) => <Recherche navigation={navigation} screenName={screenName} />} />
            <Drawer.Screen name='politique_utilisation' component={PolitiqueUtilisation} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({})

export default Drawer