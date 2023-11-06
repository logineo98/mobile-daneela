import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'

// my importations
import { colors } from '../../utils/constants'

type COMPONENT_TYPE = {
    data: {
        key: string,
        value: string,
    },
    navigation: DrawerNavigationHelpers,
}
const CategoryCard: FC<COMPONENT_TYPE> = (props) => {
    const { data, navigation } = props
    const { key, value } = data

    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.sub_menu} onPress={() => navigation.navigate('categorie', { ...data, marchand_: false })}>
            <Text style={styles.sub_menu_name}>{value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    sub_menu: { marginVertical: 5, },
    sub_menu_name: { color: colors.white, fontSize: 16 },
})

export default CategoryCard