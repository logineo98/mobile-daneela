import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { colors } from '../../utils/constants'

type COMPONENT_TYPE = {
    data: {
        title: string
        body?: {
            title: string
            body?: {
                title: string
            }[]
        }[]
    }
}

const PolitiqueUtilisationCard: FC<COMPONENT_TYPE> = (props) => {
    const { data } = props
    const { title, body } = data

    return (
        <View style={styles.one_politique_utilisation_container}>
            <Text style={styles.title1}> {title} </Text>

            {body?.map(title2 => (
                <View key={title2.title} style={styles.title2_container}>
                    <Text style={styles.title2}> {title2.title} </Text>

                    {title2?.body?.map(title3 => (
                        <View key={title3.title} style={styles.title3_container}>
                            <Text style={styles.title3}> {title3.title} </Text>
                        </View>
                    ))}
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    one_politique_utilisation_container: {},

    title1: { color: colors.black, fontWeight: '600', fontSize: 15, marginBottom: 10, },

    title2_container: { marginBottom: 5, },
    title2: { color: colors.black, fontSize: 13, textAlign: 'justify', },

    title3_container: { marginLeft: 20, marginBottom: 5, },
    title3: { color: colors.black, fontSize: 13, textAlign: 'justify', },
})

export default PolitiqueUtilisationCard