import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
// my importations
import { colors, images } from '../../utils/constants'
// my icons
import AntDesign from 'react-native-vector-icons/AntDesign'

const ModalCustomer = () => {

    const [visible, setVisible] = useState(false)

    return (
        <View style={styles.modal_container}>
            <View style={styles.modal_header}>
                <View style={styles.modal_header_left_container}>
                    <View style={styles.modal_header_left_image_container}>
                        <Image source={images.certificated} style={styles.modal_header_left_image} />
                    </View>
                    <Text style={styles.modal_header_left_text}>Marchands Certifiés</Text>
                </View>
                <TouchableOpacity style={styles.modal_close_icon_container} activeOpacity={0.5}>
                    <AntDesign name='closecircle' color={colors.main} size={25} style={styles.modal_close_icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.divider} />

            <View style={styles.modal_body}>
                <Text style={styles.modal_body_text}>Un marchand certifié est un marchand ayant un badge et répondant à certains critères.</Text>
                <Text style={styles.modal_body_text}>Le badge est un véritable atout car il sert à rassurer l’utilisateur sur la fiabilité du marchand.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modal_container: { backgroundColor: colors.white, width: '100%', borderRadius: 10, borderWidth: 1, borderColor: colors.main, elevation: 5, alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, zIndex: 100, },

    modal_header: { padding: 10, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', },
    modal_header_left_container: { flexDirection: 'row', alignItems: 'center', },
    modal_header_left_image_container: { height: 25, width: 25, },
    modal_header_left_image: { height: '100%', width: '100%', },
    modal_header_left_text: { marginLeft: 10, color: colors.black },
    modal_close_icon_container: {},
    modal_close_icon: {},


    modal_body: {},
    modal_body_text: { color: colors.black, textAlign: 'justify', padding: 10, },

    divider: { backgroundColor: colors.main, height: 1, width: '100%', },
})

export default ModalCustomer