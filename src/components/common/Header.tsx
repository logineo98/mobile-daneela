import { Image, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { ParamListBase } from '@react-navigation/native'

// my importations
import { colors, images } from '../../utils/constants'

// my icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

type COMPONENT_TYPE = {
    navigation: DrawerNavigationProp<ParamListBase, string, undefined>,
}

const Header: FC<COMPONENT_TYPE> = (props) => {
    const { navigation } = props

    return (
        <View style={styles.header_container}>
            <StatusBar backgroundColor={colors.main_black} />
            <TouchableOpacity activeOpacity={0.5} style={styles.menu_container} onPress={() => navigation.openDrawer()}>
                <MaterialIcons name='menu' size={40} color={colors.black} style={styles.menu} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={styles.logo_container} onPress={() => navigation.navigate('home')}>
                <Image source={images.logo} style={styles.logo} />
            </TouchableOpacity>
            <View />
        </View>
    )
}

const styles = StyleSheet.create({
    header_container: { padding: 10, backgroundColor: colors.bg_color, height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },

    // menu
    menu_container: {},
    menu: {},

    // logo
    logo_container: { height: 40, width: 118, },
    logo: { height: '100%', width: '100%', resizeMode: 'cover' },
})

export default Header