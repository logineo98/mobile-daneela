import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useCallback, useState } from 'react'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
// my importations
import { colors, images } from '../utils/constants'
import Loading from '../components/common/Loading'
import ScreenContainer from '../components/common/ScreenContainer'
import MarchandModal from '../components/common/MarchandModal'
import { marchand_certificated, marchand_vitepay } from '../utils/json/marchand.json'
import Slider from '../components/common/Slider'
import { categories_populaires } from '../utils/json/categorie_populaire.json'
// my icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import CategoryPopularCard from '../components/cards/CategoryPopularCard'
import MarchandCard from '../components/cards/MarchandCard'

type COMPONENT_TYPE = { navigation: DrawerNavigationHelpers, screenName: string }

const Home: FC<COMPONENT_TYPE> = (props) => {
    const { navigation, screenName } = props

    const [refreshing, setRefreshing] = useState(false)
    const [visibleCertificated, setVisibleCertificated] = useState(false)
    const [visibleVitepay, setVisibleVitepay] = useState(false)
    const [clickName, setClickName] = useState('Alimentation')

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }, [])

    return (
        refreshing ? <Loading /> :
            <ScreenContainer refreshing={refreshing} onRefresh={onRefresh} screenName={screenName} navigation={navigation}>
                <View style={styles.home_container}>
                    {/* marchand  certifié */}
                    <View style={styles.marchand_text_container}>
                        <Text style={styles.marchand_text_name}>Marchands Certifiés</Text>
                        <TouchableOpacity activeOpacity={0.5} style={styles.marchand_text_info_icon_container} onPress={() => setVisibleCertificated(true)}>
                            <MaterialIcons name='info' color={colors.black} size={16} style={styles.marchand_text_info_icon} />
                        </TouchableOpacity>
                        {visibleCertificated && <MarchandModal header_title={marchand_certificated.title} icon_letf={images.certificated} text1={marchand_certificated.text1} text2={marchand_certificated.text2} setVisible={setVisibleCertificated} />}
                    </View>

                    <Slider navigation={navigation} />

                    {/* marchand  vitepay */}
                    <View style={styles.marchand_text_container}>
                        <Text style={styles.marchand_text_name}>Marchands Vitepay</Text>
                        <TouchableOpacity activeOpacity={0.5} style={styles.marchand_text_info_icon_container} onPress={() => setVisibleVitepay(true)}>
                            <MaterialIcons name='info' color={colors.black} size={16} style={styles.marchand_text_info_icon} />
                        </TouchableOpacity>
                        {visibleVitepay && <MarchandModal header_title={marchand_vitepay.title} icon_letf={images.vitepay_logo} text1={marchand_vitepay.text1} text2={marchand_vitepay.text2} setVisible={setVisibleVitepay} />}
                    </View>

                    <Slider navigation={navigation} />

                    {/* catégorie  populaire */}
                    <View style={styles.categories_populaires_title_container}>
                        <Text style={styles.categories_populaires_title}>Catégories Populaires</Text>

                        <FlatList
                            data={categories_populaires}
                            renderItem={({ item }) => <CategoryPopularCard data={item} clickName={clickName} setClickName={setClickName} />}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.categories_populaires_container}
                        />
                    </View>

                    {/* liste marchand */}
                    <View style={styles.list_marchand_container}>
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
    home_container: { padding: 10, },

    // marchand certifié et vitepay
    marchand_text_container: { position: 'relative', flexDirection: 'row', alignItems: 'center', },
    marchand_text_name: { color: colors.black, fontSize: 20, fontWeight: '600', },
    marchand_text_info_icon_container: { marginLeft: 5, },
    marchand_text_info_icon: {},

    // categories populaires
    categories_populaires_title_container: {},
    categories_populaires_title: { color: colors.black, fontSize: 20, fontWeight: '600', },
    categories_populaires_container: { marginVertical: 10, alignItems: 'center', },

    // list marchand
    list_marchand_container: { flexDirection: 'row', flexWrap: 'wrap', },
})

export default Home