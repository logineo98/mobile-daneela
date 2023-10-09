import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useCallback, useState } from 'react'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
// my importations
import Loading from '../components/common/Loading'
import ScreenContainer from '../components/common/ScreenContainer'
import { useRoute } from '@react-navigation/native'
import { colors, images } from '../utils/constants'
// my icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FilterItemSelectedCard from '../components/cards/FilterItemSelectedCard'
import MarchandCard from '../components/cards/MarchandCard'

type COMPONENT_TYPE = { navigation: DrawerNavigationHelpers, }
type DATA_TYPE = { key: string, value: string }

const Categorie: FC<COMPONENT_TYPE> = (props) => {
    const { navigation } = props
    const route = useRoute()

    const data = route?.params as DATA_TYPE

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }, [])

    const elements_filtres = ['Bamako', 'Chemise', 'Pantalon', 'Chaussure', 'Lunette',]

    return (
        refreshing ? <Loading /> :
            <ScreenContainer refreshing={refreshing} onRefresh={onRefresh} navigation={navigation}>
                {/* appliquer le filtre */}
                <View style={styles.categorie_container}>
                    <TouchableOpacity activeOpacity={0.5} style={styles.filter_icon_name_container}>
                        <MaterialIcons name='filter-alt' color={colors.white} size={18} />
                        <Text style={styles.filter_name}>CLIQUER POUR FILTRER</Text>
                    </TouchableOpacity>

                    {/* effacer et les elements du fitre selectionné */}
                    <View style={styles.erease_selected_item_filter_container}>
                        {/* effacer les filtres */}
                        <TouchableOpacity activeOpacity={0.5} style={styles.erease_filter_container}>
                            <Image source={images.erease_filter} style={styles.erease_filter} />
                        </TouchableOpacity>
                        {/* element du filtre selectionné */}
                        <FlatList
                            data={elements_filtres}
                            renderItem={({ item, index }) => <FilterItemSelectedCard name={item} />}
                            keyExtractor={(item, i) => i.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                    <View style={styles.marchand_container}>
                        <MarchandCard navigation={navigation} />
                        <MarchandCard navigation={navigation} />
                        <MarchandCard navigation={navigation} />
                        <MarchandCard navigation={navigation} />
                    </View>

                </View>
            </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    categorie_container: { padding: 10, },

    filter_icon_name_container: { width: 178, padding: 10, borderRadius: 20, backgroundColor: colors.tomato, flexDirection: 'row', alignItems: 'center', },
    filter_icon: {},
    filter_name: { color: colors.white, },

    erease_selected_item_filter_container: { flexDirection: 'row', alignItems: 'center', },

    erease_filter_container: { height: 35, width: 120, marginVertical: 10, marginRight: 5, },
    erease_filter: { height: '100%', width: '100%', resizeMode: 'contain', },

    list_item_filter_selected_container: {},

    marchand_container: {},
})

export default Categorie