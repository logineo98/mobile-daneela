import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
// my importations
import { colors } from '../../utils/constants'
import FilterTypeArticleCard from '../cards/FilterTypeArticleCard'
// my json
import categories from '../../utils/json/categories_subcategories.json'
import regions from '../../utils/json/region.json'
import { mins, maxs } from '../../utils/json/min_max.json'

type DATA_TYPE = { key: string, value: string, marchand_?: boolean }
type COMPONENT_TYPE = {
    data: DATA_TYPE
    visibleFilterModal: boolean
    setVisibleFilterModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Filter: FC<COMPONENT_TYPE> = (props) => {
    const { data, visibleFilterModal, setVisibleFilterModal } = props
    const { key, marchand_ } = data

    const { height, width } = useWindowDimensions()

    const type_article = categories.find(category => category.id === key)

    const [selected, setSelected] = useState('')
    const [selectMinVal, setSelectMinVal] = useState('')
    const [selectMaxVal, setSelectMaxVal] = useState('')
    const [livraison, setLivraison] = useState('')
    const [serviceApresVente, setServiceApresVente] = useState('')
    const [marchand, setMarchand] = useState({ cerificated: false, vitepay: false })

    return (
        <Modal transparent={true} animationType='slide' visible={visibleFilterModal}>
            <View style={styles.filter_global_container}>
                <View style={styles.close_filter_global_container}>
                    <View style={styles.close_filter_container}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => setVisibleFilterModal(false)} style={[styles.close_filter, { backgroundColor: colors.main_black, }]}>
                            <Text style={styles.close_filter_name}>Fermer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={[styles.close_filter, { marginLeft: 10, backgroundColor: colors.tomato, }]}>
                            <Text style={styles.close_filter_name}>Filtrer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.filter_container}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* region */}
                        <View style={styles.filter_element_title_container}>
                            <Text style={styles.filter_element_title}>Régions</Text>
                            <View style={styles.filter_element_content_container}>
                                <SelectList
                                    data={regions}
                                    onSelect={() => { }}
                                    setSelected={setSelected}
                                    placeholder='Région'
                                    inputStyles={{ color: colors.black, }}
                                    dropdownTextStyles={{ color: colors.black, }}
                                    boxStyles={{ borderRadius: 0, borderWidth: 0.5, }}
                                    dropdownStyles={{ marginTop: 0, borderRadius: 0, borderWidth: 0.5, }}
                                    search={false}
                                />
                            </View>
                        </View>

                        {/* type d'article */}
                        <View style={styles.filter_element_title_container}>
                            <Text style={styles.filter_element_title}>Type d'article</Text>
                            <View style={styles.filter_element_content_container}>
                                <View style={styles.type_article_global_container}>
                                    {marchand_ === false && type_article?.children?.map(type => <FilterTypeArticleCard key={type.id} id={type.id} name={type.name} />)}
                                </View>
                            </View>
                        </View>

                        {/* fourchette de prix */}
                        <View style={styles.filter_element_title_container}>
                            <Text style={styles.filter_element_title}>Fourchette de prix</Text>
                            <View style={styles.filter_element_content_container}>
                                <View style={styles.fourchette_price_global_container}>
                                    <View style={styles.fourchette_price_container}>
                                        <Text style={styles.fourchette_title}>Min:</Text>
                                        <SelectList
                                            data={mins}
                                            onSelect={() => { }}
                                            setSelected={setSelectMinVal}
                                            placeholder='Min'
                                            boxStyles={{ borderRadius: 0, borderWidth: 0.5, width: width - (60 + 100) }}
                                            inputStyles={{ color: colors.black, }}
                                            dropdownStyles={{ marginTop: 0, borderRadius: 0, borderWidth: 0.5, }}
                                            dropdownTextStyles={{ color: colors.black, }}
                                            search={false}
                                        />
                                    </View>
                                    <View style={styles.fourchette_price_container}>
                                        <Text style={styles.fourchette_title}>Max:</Text>
                                        <SelectList
                                            data={maxs}
                                            onSelect={() => { }}
                                            setSelected={setSelectMaxVal}
                                            placeholder='Max'
                                            boxStyles={{ borderRadius: 0, borderWidth: 0.5, width: width - (60 + 100) }}
                                            inputStyles={{ color: colors.black, }}
                                            dropdownStyles={{ marginTop: 0, borderRadius: 0, borderWidth: 0.5, }}
                                            dropdownTextStyles={{ color: colors.black, }}
                                            search={false}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* services */}
                        <View style={styles.filter_element_title_container}>
                            <Text style={styles.filter_element_title}>Services</Text>
                            <View style={styles.filter_element_content_container}>
                                <View style={styles.service_global_container}>
                                    {/* option de livraison */}
                                    <View style={styles.service_container}>
                                        <Text style={styles.service_title}>Livraison:</Text>
                                        <View style={styles.service_content_container}>
                                            {['Non disponible', 'Gratuite', 'Payante'].map((value, index) => (
                                                <View key={index} style={styles.service_content}>
                                                    <Text style={styles.service_content_title}> {value} </Text>
                                                    <TouchableOpacity activeOpacity={0.5} onPress={() => setLivraison(value)} style={styles.service_content_outter}>
                                                        {livraison === value && <View style={styles.service_content_inner} />}
                                                    </TouchableOpacity>
                                                </View>
                                            ))}
                                        </View>
                                    </View>

                                    {/* option service après vente */}
                                    <View style={[styles.service_container, { width: '50%', }]}>
                                        <Text style={styles.service_title}>Services après vente:</Text>
                                        <View style={styles.service_content_container}>
                                            {['Oui', 'Non'].map((value, index) => (
                                                <View key={index} style={styles.service_content}>
                                                    <Text style={styles.service_content_title}> {value} </Text>
                                                    <TouchableOpacity activeOpacity={0.5} onPress={() => setServiceApresVente(value)} style={styles.service_content_outter}>
                                                        {serviceApresVente === value && <View style={styles.service_content_inner} />}
                                                    </TouchableOpacity>
                                                </View>
                                            ))}
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* classes des marchands */}
                        <View style={styles.filter_element_title_container}>
                            <Text style={styles.filter_element_title}>Classes des marchands</Text>
                            <View style={styles.filter_element_content_container}>
                                <View style={styles.marchand_global_container}>
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => setMarchand({ ...marchand, cerificated: !marchand.cerificated })} style={styles.marchand_container}>
                                        <View style={[styles.marchand_checkbox_container, { backgroundColor: marchand.cerificated ? colors.success : 'transparent', }]}>
                                            {marchand.cerificated && <Text style={styles.marchand_checkbox_v}>✔</Text>}
                                        </View>
                                        <Text style={styles.marchand_name}>Marchands cerifiés</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.5} onPress={() => setMarchand({ ...marchand, vitepay: !marchand.vitepay })} style={styles.marchand_container}>
                                        <View style={[styles.marchand_checkbox_container, { backgroundColor: marchand.vitepay ? colors.success : 'transparent', }]}>
                                            {marchand.vitepay && <Text style={styles.marchand_checkbox_v}>✔</Text>}
                                        </View>
                                        <Text style={styles.marchand_name}>Marchands vitepay</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    filter_global_container: { flex: 1, backgroundColor: colors.black, opacity: 0.8, padding: 10, justifyContent: 'center', },

    close_filter_global_container: { alignItems: 'flex-end', },
    close_filter_container: { padding: 5, marginBottom: 2, flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: colors.white, borderRadius: 5, },
    close_filter: { width: 95, paddingVertical: 6, borderRadius: 5, alignItems: 'center', },
    close_filter_name: { color: colors.white, },

    filter_container: { backgroundColor: colors.bg_color, height: '90%', padding: 10, borderRadius: 5, },

    filter_element_title_container: { backgroundColor: colors.white, borderRadius: 5, padding: 10, marginBottom: 10, },
    filter_element_title: { color: colors.black, fontSize: 18, fontWeight: '600', borderBottomWidth: 1, borderBottomColor: colors.light_gray, },
    filter_element_content_container: { marginTop: 10, },

    // type d'article
    type_article_global_container: { padding: 10, flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', borderWidth: 0.5, borderColor: colors.light_gray, borderRadius: 5, },

    // fourchette de prix 
    fourchette_price_global_container: {},
    fourchette_price_container: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, },
    fourchette_title: { color: colors.black, width: 100, },
    fourchette_value: {},

    // services
    service_global_container: {},
    service_container: { marginVertical: 15, },
    service_title: { color: colors.black, },
    service_content_container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, },
    service_content: { alignItems: 'center', },
    service_content_title: { color: colors.black, fontSize: 12, },
    service_content_outter: { height: 18, width: 18, borderRadius: 18, borderWidth: 1, borderColor: colors.black, padding: 2, },
    service_content_inner: { height: '100%', width: '100%', borderRadius: 18, backgroundColor: colors.light_gray, },

    // classe des marchands
    marchand_global_container: {},
    marchand_container: { flexDirection: 'row', alignItems: 'center', marginVertical: 5, },
    marchand_checkbox_container: { height: 18, width: 18, borderWidth: 1, alignItems: 'center', justifyContent: 'center', },
    marchand_checkbox_v: { color: colors.white, fontSize: 12, },
    marchand_name: { color: colors.black, marginLeft: 10, },

})

export default Filter