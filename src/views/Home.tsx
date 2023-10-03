import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useCallback, useState } from 'react'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
// my importations
import { colors } from '../utils/constants'
import Loading from '../components/common/Loading'
import ScreenContainer from '../components/common/ScreenContainer'

type COMPONENT_TYPE = {
    navigation: DrawerNavigationHelpers,
}

const Home: FC<COMPONENT_TYPE> = (props) => {
    const { navigation } = props

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }, [])

    return (
        refreshing ? <Loading /> :
            <ScreenContainer refreshing={refreshing} onRefresh={onRefresh} navigation={navigation}>
                <View style={styles.home_container}>
                    <Text style={{ color: colors.black }}>Je suis le home</Text>
                </View>
            </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    home_container: { padding: 10, },

})

export default Home