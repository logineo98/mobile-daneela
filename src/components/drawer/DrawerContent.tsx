import { FlatList, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { FC } from 'react'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'

// my importations
import { categories, colors } from '../../utils/constants'
import CategoryCard from '../cards/CategoryCard'

// my icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

type COMPONENT_TYPE = {
    navigation: DrawerNavigationHelpers,
    // screenName: string
}

const DrawerCustomer: FC<COMPONENT_TYPE> = (props) => {
    const { navigation } = props
    const { height, width } = useWindowDimensions()

    return (
        <View style={styles.drawer_container}>
            <TouchableOpacity activeOpacity={0.5} style={styles.drawer_close_container} onPress={() => navigation.closeDrawer()}>
                <MaterialIcons name='menu' size={40} color={colors.white} style={styles.drawer_close_icon} />
            </TouchableOpacity>

            <View style={styles.menu_container}>
                <TouchableOpacity activeOpacity={0.5} style={styles.menu} onPress={() => navigation.navigate('home')}>
                    <Text style={styles.menu_name}>Accueil</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.menu} onPress={() => navigation.navigate('home')}>
                    <Text style={styles.menu_name}>Catégories</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={categories}
                renderItem={({ item }) => <CategoryCard data={item} navigation={navigation} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.sub_menu_container}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    drawer_container: { padding: 10, flex: 1, backgroundColor: colors.main_black },

    // drawer close
    drawer_close_container: { justifyContent: 'center', },
    drawer_close_icon: {},

    // menu
    menu_container: {},
    menu: { marginVertical: 5, },
    menu_name: { color: colors.white, fontSize: 18, },

    sub_menu_container: { marginLeft: 20, marginVertical: 5, },
})

export default DrawerCustomer
