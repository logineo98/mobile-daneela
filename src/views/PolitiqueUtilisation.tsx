import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
// my importations
import { colors } from '../utils/constants'
import politique_utilisation from '../utils/politique_utilisation'
import PolitiqueUtilisationCard from '../components/cards/PolitiqueUtilisationCard'
import Footer from '../components/common/Footer'

type COMPONENT_TYPE = {
    navigation: DrawerNavigationHelpers,
}

const PolitiqueUtilisation: FC<COMPONENT_TYPE> = (props) => {
    const { navigation } = props

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.politique_utilisation_container}>
            <Text style={styles.title}>Politique d'utilisation</Text>

            <View style={styles.list_politique_utilisation_container}>
                {politique_utilisation.map(utilisation => <PolitiqueUtilisationCard key={utilisation.title} data={utilisation} />)}
            </View>

            <Footer navigation={navigation} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    politique_utilisation_container: { flexGrow: 1, backgroundColor: colors.bg_color },

    title: { color: colors.black, fontSize: 20, fontWeight: '600', textAlign: 'center', },

    list_politique_utilisation_container: { padding: 10 },
})

export default PolitiqueUtilisation