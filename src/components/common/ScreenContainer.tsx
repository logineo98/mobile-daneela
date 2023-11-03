import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
// my importations
import { colors } from '../../utils/constants'
import Footer from './Footer'
import Search from './Search'

type COMPONENT_TYPE = {
    children: JSX.Element | JSX.Element[]
    navigation: DrawerNavigationHelpers,
    onRefresh: any
    refreshing: any
    screenName: string
}

const ScreenContainer: FC<COMPONENT_TYPE> = (props) => {
    const { children, navigation, onRefresh, refreshing, screenName } = props

    return (
        <>
            {/* recherche */}
            <Search screenName={screenName} navigation={navigation} />
            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.bg_color }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} showsVerticalScrollIndicator={false} >
                <View style={styles.global_container}>
                    {children}
                    <Footer navigation={navigation} />
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    global_container: {},
})

export default ScreenContainer