import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { FC } from 'react'
import Swiper from 'react-native-swiper'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
// my importations
import { colors, images } from '../../utils/constants'
import MarchandCard from '../cards/MarchandCard'

type COMPONENT_TYPE = {
    navigation: DrawerNavigationHelpers,
}

const Slider: FC<COMPONENT_TYPE> = (props) => {
    const { navigation } = props

    const { height, width } = useWindowDimensions()

    return (
        <Swiper style={styles.slider_global_container} autoplay={true} activeDotStyle={{ backgroundColor: colors.main }}>
            <View style={styles.slider_container}>
                <View style={styles.slider}>
                    <MarchandCard navigation={navigation} />

                    <MarchandCard navigation={navigation} />
                </View>

                <View style={styles.slider}>
                    <MarchandCard navigation={navigation} />

                    <MarchandCard navigation={navigation} />
                </View>
            </View>

            <View style={styles.slider_container}>
                <View style={styles.slider}>
                    <MarchandCard navigation={navigation} />

                    <MarchandCard navigation={navigation} />
                </View>

                <View style={styles.slider}>
                    <MarchandCard navigation={navigation} />

                    <MarchandCard navigation={navigation} />
                </View>
            </View>

            <View style={styles.slider_container}>
                <View style={styles.slider}>
                    <MarchandCard navigation={navigation} />

                    <MarchandCard navigation={navigation} />
                </View>

                <View style={styles.slider}>
                    <MarchandCard navigation={navigation} />

                    <MarchandCard navigation={navigation} />
                </View>
            </View>
        </Swiper>
    )
}

const styles = StyleSheet.create({
    // marchand certifié slider
    slider_global_container: { height: 285, },
    slider_container: {},
    slider: { flexDirection: 'row', alignItems: 'center', },
})

export default Slider
