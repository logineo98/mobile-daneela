import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useCallback, useState } from 'react'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
// my importations
import Loading from '../components/common/Loading'
import ScreenContainer from '../components/common/ScreenContainer'
import { useRoute } from '@react-navigation/native'
import { colors, images } from '../utils/constants'
import FilterItemSelectedCard from '../components/cards/FilterItemSelectedCard'
import MarchandCard from '../components/cards/MarchandCard'
import Filter from '../components/common/Filter'
// my json
import categories from '../utils/json/categories_subcategories.json'
// my icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

type DATA_TYPE = { key: string, marchand?: boolean }
type COMPONENT_TYPE = { navigation: DrawerNavigationHelpers, screenName: string }

const Recherche: FC<COMPONENT_TYPE> = (props) => {
    const { navigation, screenName } = props
    const route = useRoute()

    const route_data = route?.params as DATA_TYPE

    const type_article = route_data?.key?.includes('_') ? categories?.find(category => category.id === route_data.key?.split('_')[0]) : categories?.find(category => category.id === route_data.key)

    const [refreshing, setRefreshing] = useState(false)
    const [visibleFilterModal, setVisibleFilterModal] = useState(false)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }, [])

    const elements_filtres = ['Bamako', 'Chemise', 'Pantalon', 'Chaussure', 'Lunette',]

    return (
        refreshing ? <Loading /> :
            <ScreenContainer refreshing={refreshing} onRefresh={onRefresh} screenName={screenName} navigation={navigation}>
                {/* titre de l'ecran */}
                <Text style={styles.title_screen}>Recherche</Text>
                {/* appliquer le filtre */}
                <View style={styles.recherche_container}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => setVisibleFilterModal(true)} style={styles.filter_icon_name_container}>
                        <MaterialIcons name='filter-alt' color={colors.white} size={18} />
                        <Text style={styles.filter_name}>CLIQUER POUR FILTRER</Text>
                    </TouchableOpacity>

                    <Filter data={{ key: type_article?.id as string, value: type_article?.name as string, marchand_: route_data.marchand ? true : false }} visibleFilterModal={visibleFilterModal} setVisibleFilterModal={setVisibleFilterModal} />

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

                    {/* marchands recommandés */}
                    <Text style={styles.groupe_article_title}>Marchands Recommandés</Text>
                    <View style={styles.marchand_container}>
                        <MarchandCard navigation={navigation} />
                        <MarchandCard navigation={navigation} />
                        <MarchandCard navigation={navigation} />
                    </View>

                    {/* résultat De La Recherche */}
                    <Text style={styles.groupe_article_title}>Résultat De La Recherche</Text>
                    <View style={styles.marchand_container}>
                        <MarchandCard navigation={navigation} />
                        <MarchandCard navigation={navigation} />
                        <MarchandCard navigation={navigation} />
                    </View>
                </View>
            </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    recherche_container: { padding: 10, },

    title_screen: { color: colors.main_black, fontSize: 25, fontWeight: '600', textAlign: 'center', textDecorationLine: 'underline', },

    filter_icon_name_container: { width: 178, padding: 8, borderRadius: 20, backgroundColor: colors.tomato, flexDirection: 'row', alignItems: 'center', },
    filter_icon: {},
    filter_name: { color: colors.white, },

    erease_selected_item_filter_container: { flexDirection: 'row', alignItems: 'center', },

    erease_filter_container: { height: 35, width: 120, marginVertical: 10, marginRight: 5, },
    erease_filter: { height: '100%', width: '100%', resizeMode: 'contain', },

    list_item_filter_selected_container: {},

    marchand_container: {},

    groupe_article_title: { color: colors.black, fontSize: 18, fontWeight: '600', },
})


export default Recherche