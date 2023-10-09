import { StyleSheet, Text } from 'react-native'
import React, { FC } from 'react'
// my importations
import { colors } from '../../utils/constants'

type COMPONENT_TYPE = { name: string }

const FilterItemSelectedCard: FC<COMPONENT_TYPE> = (props) => {
    const { name } = props

    return (<Text style={styles.name_container}> {name} </Text>)
}

const styles = StyleSheet.create({
    name_container: { marginRight: 5, color: colors.black, backgroundColor: colors.white, padding: 5, borderWidth: 0.5, borderColor: colors.light_gray, borderRadius: 20, },
})

export default FilterItemSelectedCard