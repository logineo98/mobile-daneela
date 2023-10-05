import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useCallback, useState } from 'react'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
// my importations
import { colors } from '../utils/constants'
import Loading from '../components/common/Loading'
import ScreenContainer from '../components/common/ScreenContainer'
import ModalCustomer from '../components/common/Modal'

// my icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

type COMPONENT_TYPE = {
    navigation: DrawerNavigationHelpers,
}

const Home: FC<COMPONENT_TYPE> = (props) => {
    const { navigation } = props

    const [refreshing, setRefreshing] = useState(false)
    const [visible, setVisible] = useState(false)

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
                        <TouchableOpacity activeOpacity={0.5} style={styles.marchand_text_info_icon_container} onPress={() => setVisible(!visible)}>
                            <MaterialIcons name='info' color={colors.black} size={16} style={styles.marchand_text_info_icon} />
                        </TouchableOpacity>
                        <ModalCustomer />
                    </View>

                    <View style={styles.marchand_text_container}>
                        <Text style={styles.marchand_text_name}>Marchands Vitepay</Text>
                        <TouchableOpacity activeOpacity={0.5} style={styles.marchand_text_info_icon_container}>
                            <MaterialIcons name='info' color={colors.black} size={16} style={styles.marchand_text_info_icon} />
                        </TouchableOpacity>
                    </View>


                </View>
            </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    home_container: { padding: 10, },

    // marchand certifié
    marchand_text_container: { flexDirection: 'row', alignItems: 'center', },
    marchand_text_name: { color: colors.black, fontSize: 20, fontWeight: '600', },
    marchand_text_info_icon_container: { marginLeft: 5, },
    marchand_text_info_icon: {},

    // modal
    modal_container: {},
    modal: { backgroundColor: 'red' },

})

export default Home