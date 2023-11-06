import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { FC } from 'react'
import { Rating } from 'react-native-ratings'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
// my importations
import { colors, images } from '../../utils/constants'

type COMPONENT_TYPE = {
    navigation: DrawerNavigationHelpers
    slider?: boolean
}

const MarchandCard: FC<COMPONENT_TYPE> = (props) => {
    const { navigation, slider } = props

    const { height, width } = useWindowDimensions()

    return (
        <TouchableOpacity activeOpacity={0.5} style={[styles.marchand_container, { width: width < 640 ? (width - 20) : (width / 2) - 20, marginRight: (slider && width < 640) ? 0 : 10 }]} onPress={() => navigation.navigate('detail')}>
            <Image source={images.arriere} style={styles.image_arriere} />

            <View style={styles.image_avant_info_container}>
                <View style={styles.image_avant_container}>
                    <Image source={images.avant} style={styles.image_avant} />

                    <View style={styles.image_vitepay_container}>
                        <Image source={images.vitepay_logo} style={styles.image_vitepay} />
                    </View>
                </View>

                <View style={[styles.info_container, { width: width < 640 ? (width - 150) : ((width / 2) - 150), }]}>
                    <Text numberOfLines={1} style={styles.info_title}>Fikaso</Text>
                    <View style={styles.info_icon_name_container}>
                        <View style={styles.info_icon_container}>
                            <Image source={images.certificated} style={styles.info_icon} />
                        </View>
                        <Text numberOfLines={1} style={styles.info_name}>Marchand certifié</Text>
                    </View>
                    <Text numberOfLines={1} style={styles.info_adresse}>Hamdallaye ACI 2000 Rue 286 1975.</Text>
                    <Rating imageSize={16} ratingCount={5} tintColor={colors.black} startingValue={4} readonly style={styles.info_rating} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    marchand_container: { position: 'relative', backgroundColor: colors.black, borderRadius: 5, marginBottom: 10, },
    image_arriere: { height: '100%', width: '100%', resizeMode: 'cover', position: 'absolute', opacity: 0.5, borderRadius: 5, },

    image_avant_info_container: { flexDirection: 'row', paddingHorizontal: 10, paddingBottom: 10, paddingTop: (10 + (25 / 2)), },
    image_avant_container: { position: 'relative', height: 100, width: 100, backgroundColor: colors.white, borderRadius: 5, padding: 5, },
    image_avant: { height: '100%', width: '100%', resizeMode: 'contain', },

    image_vitepay_container: { backgroundColor: colors.white, padding: 2, height: 25, width: 25, borderRadius: 25, position: 'absolute', left: (100 - (50 + 12.5)), top: -(25 / 2) },
    image_vitepay: { height: '100%', width: '100%', resizeMode: 'contain', },

    info_container: { marginLeft: 10, justifyContent: 'space-between', },
    info_title: { color: colors.white, fontSize: 18, fontWeight: '600' },
    info_icon_name_container: { flexDirection: 'row', alignItems: 'center', },
    info_icon_container: { height: 18, width: 18, },
    info_icon: { height: '100%', width: '100%', resizeMode: 'cover', },
    info_name: { color: colors.white, marginLeft: 5, },
    info_adresse: { color: colors.white, },
    info_rating: { alignItems: 'flex-start', },
})

export default MarchandCard