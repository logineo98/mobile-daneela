import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
// my importations
import { colors } from '../../utils/constants'

type COMPONENT_TYPE = {
    color?: string
    message?: string
    size?: 'small' | 'large'
}

const Loading: FC<COMPONENT_TYPE> = (props) => {
    const { color, size, message } = props

    return (
        <View style={styles.container}>
            <ActivityIndicator size={size ? size : 'large'} color={color ? color : colors.main} />
            {message && <Text> {message} </Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.bg_color, alignItems: 'center', justifyContent: 'center' }
})


export default Loading
