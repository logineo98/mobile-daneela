import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'
// my importations
import { colors, images } from '../../utils/constants'
// my icons
import AntDesign from 'react-native-vector-icons/AntDesign'

type COMPONENT_TYPE = {
    header_title: string
    icon_letf: any
    text1: string
    text2: string
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const MarchandModal: FC<COMPONENT_TYPE> = (props) => {
    const { header_title, icon_letf, text1, text2, setVisible } = props

    return (
        <View style={styles.modal_container}>
            <View style={styles.modal_header}>
                <View style={styles.modal_header_left_container}>
                    <View style={styles.modal_header_left_image_container}>
                        <Image source={icon_letf} style={styles.modal_header_left_image} />
                    </View>
                    <Text style={styles.modal_header_left_text}> {header_title} </Text>
                </View>
                <TouchableOpacity style={styles.modal_close_icon_container} activeOpacity={0.5} onPress={() => setVisible(false)}>
                    <AntDesign name='closecircle' color={colors.main} size={25} style={styles.modal_close_icon} />
                </TouchableOpacity>
            </View>

            <View style={styles.divider} />

            <View style={styles.modal_body}>
                <Text style={styles.modal_body_text}> {text1} </Text>
                <Text style={styles.modal_body_text}> {text2} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modal_container: { backgroundColor: colors.white, width: '100%', borderRadius: 10, borderWidth: 1, borderColor: colors.main, elevation: 5, alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, zIndex: 100, },

    modal_header: { padding: 10, width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', },
    modal_header_left_container: { flexDirection: 'row', alignItems: 'center', },
    modal_header_left_image_container: { height: 25, width: 25, },
    modal_header_left_image: { height: '100%', width: '100%', resizeMode: 'cover', },
    modal_header_left_text: { marginLeft: 10, color: colors.black },
    modal_close_icon_container: {},
    modal_close_icon: {},


    modal_body: {},
    modal_body_text: { color: colors.black, textAlign: 'justify', padding: 10, },

    divider: { backgroundColor: colors.main, height: 1, width: '100%', },
})

export default MarchandModal