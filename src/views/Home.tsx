import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useCallback, useState } from 'react'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
// my importations
import { colors, images } from '../utils/constants'
import Loading from '../components/common/Loading'
import ScreenContainer from '../components/common/ScreenContainer'
import MarchandModal from '../components/common/MarchandModal'
import { marchand_certificated, marchand_vitepay } from '../utils/json/marchand.json'
import Slider from '../components/common/Slider'
// my icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

type COMPONENT_TYPE = {
    navigation: DrawerNavigationHelpers,
}

const Home: FC<COMPONENT_TYPE> = (props) => {
    const { navigation } = props

    const [refreshing, setRefreshing] = useState(false)
    const [visibleCertificated, setVisibleCertificated] = useState(false)
    const [visibleVitepay, setVisibleVitepay] = useState(false)

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
                    <View style={styles.marchand_text_container}>
                        <Text style={styles.marchand_text_name}>Marchands Certifiés</Text>
                        <TouchableOpacity activeOpacity={0.5} style={styles.marchand_text_info_icon_container} onPress={() => setVisibleCertificated(true)}>
                            <MaterialIcons name='info' color={colors.black} size={16} style={styles.marchand_text_info_icon} />
                        </TouchableOpacity>
                        {visibleCertificated && <MarchandModal header_title={marchand_certificated.title} icon_letf={images.certificated} text1={marchand_certificated.text1} text2={marchand_certificated.text2} setVisible={setVisibleCertificated} />}
                    </View>

                    <Slider navigation={navigation} />

                    <View style={styles.marchand_text_container}>
                        <Text style={styles.marchand_text_name}>Marchands Vitepay</Text>
                        <TouchableOpacity activeOpacity={0.5} style={styles.marchand_text_info_icon_container} onPress={() => setVisibleVitepay(true)}>
                            <MaterialIcons name='info' color={colors.black} size={16} style={styles.marchand_text_info_icon} />
                        </TouchableOpacity>
                        {visibleVitepay && <MarchandModal header_title={marchand_vitepay.title} icon_letf={images.vitepay_logo} text1={marchand_vitepay.text1} text2={marchand_vitepay.text2} setVisible={setVisibleVitepay} />}
                    </View>

                    <Slider navigation={navigation} />


                </View>
            </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    home_container: { padding: 10, },

    // marchand certifié et vitepay
    marchand_text_container: { position: 'relative', flexDirection: 'row', alignItems: 'center', },
    marchand_text_name: { color: colors.black, fontSize: 20, fontWeight: '600', },
    marchand_text_info_icon_container: { marginLeft: 5, },
    marchand_text_info_icon: {},

})

export default Home