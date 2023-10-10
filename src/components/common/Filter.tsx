import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
// my importations
import { colors } from '../../utils/constants'
import regions from '../../utils/json/region.json'
import categories from '../../utils/json/categories_subcategories.json'
import FilterTypeArticleCard from '../cards/FilterTypeArticleCard'

type DATA_TYPE = { key: string, value: string }
type COMPONENT_TYPE = { data: DATA_TYPE, }

const Filter: FC<COMPONENT_TYPE> = (props) => {
    const { data } = props
    const { key } = data

    const { height, width } = useWindowDimensions()

    const type_article = categories.find(category => category.id === key)

    const [selected, setSelected] = useState('')

    return (
        <Modal
            transparent={true}
        >
            <View style={styles.filter_global_container}>
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
                                    {type_article?.children?.map(type => <FilterTypeArticleCard key={type.id} id={type.id} name={type.name} />)}
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
                                            data={regions}
                                            onSelect={() => { }}
                                            setSelected={setSelected}
                                            placeholder='Région'
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
                                            data={regions}
                                            onSelect={() => { }}
                                            setSelected={setSelected}
                                            placeholder='Région'
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
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    filter_global_container: { flex: 1, backgroundColor: colors.black, opacity: 0.8, padding: 10, justifyContent: 'center', },
    filter_container: { backgroundColor: colors.bg_color, height: '95%', padding: 10, borderRadius: 5, },

    filter_element_title_container: { backgroundColor: colors.white, borderRadius: 5, padding: 10, marginBottom: 10, },
    filter_element_title: { color: colors.black, fontSize: 18, fontWeight: '600', borderBottomWidth: 1, borderBottomColor: colors.light_gray, },
    filter_element_content_container: { marginTop: 10, },

    type_article_global_container: { padding: 10, flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', borderWidth: 0.5, borderColor: colors.light_gray, borderRadius: 5, },

    fourchette_price_global_container: {},
    fourchette_price_container: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, },
    fourchette_title: { color: colors.black, width: 100, },
    fourchette_value: {},
})

export default Filter