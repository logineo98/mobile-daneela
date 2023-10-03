import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
// my importations
import { colors, images } from '../../utils/constants'


type COMPONENT_TYPE = {
    navigation: DrawerNavigationHelpers
}

const Footer: FC<COMPONENT_TYPE> = (props) => {
    const { navigation } = props

    return (
        <View style={styles.footer_container}>
            <View style={styles.logo_white_container}>
                <Image source={images.logo_white} style={styles.logo_white} />
            </View>
            <View style={styles.copyright_logineo_year_container}>
                <Text style={styles.copyright}>@Copyright | </Text>
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.logineo}>Logineo</Text>
                </TouchableOpacity>
                <Text style={styles.year}> | 2021</Text>
            </View>
            <TouchableOpacity activeOpacity={0.5} style={styles.politique_utilisation_container} onPress={() => navigation.navigate('politique_utilisation')}>
                <Text style={styles.politique_utilisation}>Politique d'utilisation</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} style={styles.contact_us_container}>
                <Text style={styles.contact_us}>Contactez-nous</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer_container: { backgroundColor: colors.main_black, alignItems: 'center', paddingVertical: 20, },

    logo_white_container: { height: 50, width: 130, marginBottom: 15 },
    logo_white: { height: '100%', width: '100%', resizeMode: 'cover' },

    copyright_logineo_year_container: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
    copyright: { color: colors.white },
    logineo: { color: colors.main },
    year: { color: colors.white },

    politique_utilisation_container: { marginBottom: 20, },
    politique_utilisation: { color: colors.main },

    contact_us_container: { backgroundColor: colors.tomato, padding: 10, borderRadius: 5, },
    contact_us: { color: colors.white, fontSize: 13, textTransform: 'uppercase', },
})

export default Footer