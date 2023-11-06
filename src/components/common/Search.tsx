import { StyleSheet, ToastAndroid, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
import { useDispatch, useSelector } from 'react-redux'
// my importations
import { colors } from '../../utils/constants'
import Dropdown from '../others/dropdown/Dropdown'
import { _search } from '../../redux/actions/search.action'
import { ROOT_REDUCER_TYPE } from '../../redux/store'
// my json
import { search_by } from '../../utils/json/recherche.json'
import categories from '../../utils/json/categories.json'
import sub_categories from '../../utils/json/sub_categories.json'
import marchands from '../../utils/json/marchands.json'
// my icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


type ITEM_TYPE = { key: string, value: string }
type COMPONENT_TYPE = { navigation: DrawerNavigationHelpers, screenName: string }

const Search: FC<COMPONENT_TYPE> = (props) => {
    const { navigation, screenName } = props

    const { height, width } = useWindowDimensions()

    const { first_search, second_search } = useSelector((state: ROOT_REDUCER_TYPE) => state.search)
    const dispatch = useDispatch<any>()

    const [selectSearchBy, setSelectSearchBy] = useState<ITEM_TYPE>()
    const [selected, setSelected] = useState<ITEM_TYPE>()
    const [dataToSearch, setDataToSearch] = useState<ITEM_TYPE[]>([])

    const handleSearch = async () => {
        if (!selected) ToastAndroid.showWithGravity('Veuillez choisir un élément dans recherche.', ToastAndroid.CENTER, ToastAndroid.TOP)
        else {
            dispatch(_search({ first_search: selectSearchBy as ITEM_TYPE, second_search: selected }, navigation))
        }
    }

    useEffect(() => {
        if (selectSearchBy?.key === '1') setDataToSearch(sub_categories)
        else if (selectSearchBy?.key === '2') setDataToSearch(categories)
        else if (selectSearchBy?.key === '3') setDataToSearch(marchands)
        else setDataToSearch([]);

        setSelected(undefined)
    }, [selectSearchBy])

    useEffect(() => {
        if (screenName !== 'politique_utilisation') {
            if (first_search) setSelectSearchBy(first_search)
            if (second_search) setSelected(second_search)
        }
    }, [screenName])

    return (
        <View style={styles.search_global_container}>
            <View style={styles.search_container}>
                <Dropdown
                    data={search_by}
                    setValue={setSelectSearchBy}
                    value={selectSearchBy}
                    defaultValue={first_search ? first_search : { key: '1', value: 'Article' }}

                    itemSelectedContainerStyle={{ height: 45, padding: 11, borderWidth: 0.5, borderRadius: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, }}
                    dropDownContainerStyle={{ borderWidth: 0.5, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, }}
                />

                <View style={styles.search_submit_container}>
                    <Dropdown
                        data={dataToSearch}
                        setValue={setSelected}
                        value={selected}
                        defaultValue={second_search ? second_search : undefined}

                        searchable={true}
                        searchPlaceholder='Recherche...'
                        searchPlaceholderTextColor={colors.light_gray}

                        style={{ width: (width - (40 + 40)), }}
                        itemSelectedContainerStyle={{ backgroundColor: 'rgba(0,0,0,0.4)', height: 45, padding: 11, borderWidth: 0.5, borderRadius: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, }}
                        itemSelectedStyle={{ color: colors.white, }}
                        searchInputStyle={{}}
                        dropDownContainerStyle={{ borderWidth: 0.5, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, }}
                    />
                    <TouchableOpacity activeOpacity={0.5} onPress={handleSearch} style={styles.search_submit_icon_container}>
                        <MaterialIcons name='search' color={colors.white} size={25} style={styles.search_submit_icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    search_global_container: { padding: 10, backgroundColor: colors.bg_color, },
    search_container: { padding: 10, paddingBottom: 0, },

    search_submit_container: { flexDirection: 'row', },
    search_submit_icon_container: { backgroundColor: colors.tomato, width: 40, height: 45, alignItems: 'center', justifyContent: 'center', borderWidth: 0.5, },
    search_submit_icon: {},
})

export default Search