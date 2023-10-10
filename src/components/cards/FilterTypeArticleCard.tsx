import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { colors } from '../../utils/constants'

type COMPONENT_TYPE = { id: string, name: string }

const FilterTypeArticleCard: FC<COMPONENT_TYPE> = (props) => {
    const { id, name } = props

    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.type_article_container}>
            <Text style={styles.type_article}> {name} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    type_article_container: { paddingVertical: 5, paddingHorizontal: 10, borderRadius: 20, borderWidth: 0.5, borderColor: colors.light_gray, marginRight: 5, marginBottom: 5, },
    type_article: { color: colors.black, },
})

export default FilterTypeArticleCard