import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
// my importations
import { colors, images } from '../../utils/constants'

type COMPONENT_TYPE = {
    data: {
        id: string
        name: string
    }
    clickName: string
    setClickName: React.Dispatch<React.SetStateAction<string>>
}

const CategoryPopularCard: FC<COMPONENT_TYPE> = (props) => {
    const { data, clickName, setClickName } = props
    const { id, name } = data

    const [image, setImage] = useState(images.alimentation)

    const activeProduct = (name: string) => {
        setClickName(name)
    }

    useEffect(() => {
        if (name === 'Alimentation') setImage(images.alimentation)
        else if (name === 'Fashion') setImage(images.fashion)
        else if (name === 'Électronique') setImage(images.electronique)
        else if (name === 'Supermarché') setImage(images.supermarche)
        else if (name === 'Restauration') setImage(images.restauration)
    }, [])

    return (
        <View style={styles.produit_populaire_name_container}>
            <TouchableOpacity activeOpacity={0.5} style={styles.produit_populaire} onPress={() => activeProduct(name)}>
                <Image source={image} style={[styles.produit_populaire_image, { opacity: clickName === name ? 1 : 0.5 }]} />
            </TouchableOpacity>
            <Text style={[styles.produit_populaire_name, { color: clickName === name ? colors.black : colors.light_gray }]}> {name} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    produit_populaire_name_container: { marginRight: 10, alignItems: 'center', },
    produit_populaire_name: {},
    produit_populaire: { height: 85, width: 85, },
    produit_populaire_image: { height: '100%', width: '100%', resizeMode: 'cover', borderRadius: 85, },
})

export default CategoryPopularCard




