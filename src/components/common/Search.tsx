import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
// my importations
import { colors } from '../../utils/constants'
import { search_by } from '../../utils/json/recherche.json'
import categories from '../../utils/json/categories.json'
import sub_categories from '../../utils/json/sub_categories.json'
// my icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Search = () => {

    const { height, width } = useWindowDimensions()

    const [selected, setSelected] = useState('')
    const [selectSearchBy, setSelectSearchBy] = useState('')
    const [dataToSearch, setDataToSearch] = useState<any[]>()

    useEffect(() => {
        if (selectSearchBy === '1') setDataToSearch(sub_categories)
        else if (selectSearchBy === '2') setDataToSearch(categories)
        else if (selectSearchBy === '3') setDataToSearch([])
    }, [selectSearchBy])

    return (
        <View style={styles.search_global_container}>
            <View style={styles.search_container}>
                <SelectList
                    onSelect={() => { }}
                    setSelected={setSelectSearchBy}
                    data={search_by}
                    defaultOption={{ key: '1', value: 'Article' }}
                    placeholder='Rechercher par : '
                    inputStyles={{ color: colors.black, }}
                    dropdownTextStyles={{ color: colors.black, }}
                    boxStyles={{ borderRadius: 0, borderWidth: 0.5, borderBottomWidth: 0, }}
                    dropdownStyles={{ marginTop: 0, borderRadius: 0, borderWidth: 0.5, }}
                    search={false}
                />

                <View style={styles.search_submit_container}>
                    <SelectList
                        onSelect={() => console.log(selected)}
                        setSelected={setSelected}
                        data={selectSearchBy === '1' ? sub_categories : selectSearchBy === '2' ? categories : []}
                        placeholder='Rechercher'
                        searchPlaceholder='Rechercher'
                        notFoundText='Aucune donnée trouvée'
                        boxStyles={{ borderRadius: 0, width: (width - (40 + 40)), backgroundColor: 'rgba(0,0,0,0.4)', borderWidth: 0, }}
                        inputStyles={{ color: colors.white, }}
                        dropdownStyles={{ marginTop: 0, borderRadius: 0, borderWidth: 0.5, }}
                        dropdownTextStyles={{ color: colors.black, fontSize: 12, }}
                        arrowicon={<MaterialIcons name='keyboard-arrow-down' color={colors.white} size={18} style={styles.search_submit_icon} />}
                        searchicon={<MaterialIcons name='search' color={colors.white} size={18} style={styles.search_submit_icon} />}
                        closeicon={<MaterialIcons name='close' color={colors.white} size={18} style={styles.search_submit_icon} />}
                    />
                    <TouchableOpacity activeOpacity={0.5} style={styles.search_submit_icon_container}>
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
    search_submit_icon_container: { backgroundColor: colors.tomato, width: 40, height: 45, alignItems: 'center', justifyContent: 'center' },
    search_submit_icon: {},
})

export default Search