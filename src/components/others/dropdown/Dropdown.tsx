import { ColorValue, FlatList, Image, ImageStyle, StyleSheet, Text, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
// my importations
import { images } from '../../../utils/constants'

type ITEM_TYPE = { key: string, value: string }
type COMPONENT_TYPE = {
    data: ITEM_TYPE[]
    value: ITEM_TYPE | undefined
    setValue: React.Dispatch<React.SetStateAction<ITEM_TYPE | undefined>>

    defaultValue?: ITEM_TYPE

    placeholder?: string
    placeholderContainerStyle?: ViewStyle
    placeholderStyle?: TextStyle
    itemSelectedContainerStyle?: ViewStyle
    itemSelectedStyle?: TextStyle

    arrowStyle?: ImageStyle

    searchable?: boolean
    searchPlaceholder?: string
    searchPlaceholderTextColor?: ColorValue
    searchContainerStyle?: ViewStyle
    searchInputStyle?: TextStyle

    notFoundText?: string
    notFoundTextColor?: ColorValue

    verticalIndicator?: boolean
    dropDownContainerStyle?: ViewStyle
    dropDownItemContainerStyle?: ViewStyle
    dropDownItemStyle?: TextStyle

    style?: ViewStyle
}

const Dropdown: FC<COMPONENT_TYPE> = (props) => {
    const { data, setValue, value, arrowStyle, defaultValue, dropDownContainerStyle, dropDownItemContainerStyle, dropDownItemStyle, itemSelectedContainerStyle, itemSelectedStyle, notFoundText, notFoundTextColor, placeholder, placeholderContainerStyle, placeholderStyle, searchContainerStyle, searchInputStyle, searchPlaceholder, searchPlaceholderTextColor, searchable, style, verticalIndicator } = props

    // variable
    const [open, setOpen] = useState(false)
    // const [value, setValue] = useState<ITEM_TYPE>()
    const [search, setSearch] = useState('')
    const [filteredData, setFilteredData] = useState<ITEM_TYPE[]>([])

    // function
    const handleOpen = () => {
        setOpen(!open)
        open && setSearch('')
    }
    const handleSelectItem = (item: ITEM_TYPE) => {
        setValue(item)
        setOpen(false)
    }

    // useEffect
    useEffect(() => {
        if (defaultValue) setValue(defaultValue)
    }, [])

    useEffect(() => {
        const result = data?.filter(item => item?.value?.toLowerCase()?.includes(search.toLowerCase()))

        setFilteredData(result)
    }, [search, data])

    return (
        <View style={[styles.dropdown_container, style]}>
            <TouchableOpacity activeOpacity={0.5} onPress={handleOpen} style={[styles.item_selected_arrow_container, { borderRadius: open ? 0 : 10 }, placeholderContainerStyle, itemSelectedContainerStyle]}>
                <Text style={[styles.item_selected, placeholderStyle, itemSelectedStyle]}> {value ? value.value : placeholder ? placeholder : `Sélectionnez un élément`} </Text>
                <Image source={open ? images.fleche_haut : images.fleche_bas} style={[styles.arrow, arrowStyle]} />
            </TouchableOpacity>
            {open &&
                <>
                    {searchable &&
                        <View style={[styles.search_input_container, searchContainerStyle]}>
                            <TextInput placeholder={searchPlaceholder || `Tapez quelque chose...`} placeholderTextColor={searchPlaceholderTextColor} value={search} onChangeText={text => setSearch(text)} style={[styles.search_input, searchInputStyle]} />
                        </View>
                    }
                    <View style={[styles.list_item_container, dropDownContainerStyle]}>
                        {filteredData?.length > 0 ?
                            <FlatList
                                data={filteredData}
                                renderItem={({ item }) => (
                                    <TouchableOpacity activeOpacity={0.2} onPress={() => handleSelectItem(item)} style={[styles.item_container, dropDownItemContainerStyle]}>
                                        <Text style={[styles.item, dropDownItemStyle]}> {item.value} </Text>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={(item) => item.key}
                                showsVerticalScrollIndicator={true}
                                contentContainerStyle={{ padding: 10, }}
                            /> : <Text style={[styles.no_found_text, { color: notFoundTextColor ? notFoundTextColor : 'black' }]}> {notFoundText || `Aucun élément trouvé.`} </Text>
                        }
                    </View>
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    dropdown_container: {},

    item_selected_arrow_container: { backgroundColor: 'white', padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10, },
    item_selected: { color: 'black', },
    arrow: { height: 14, width: 14, objectFit: 'cover', },

    search_input_container: { backgroundColor: 'white', padding: 10, borderTopWidth: 0, borderWidth: 1, },
    search_input: { height: 40, paddingHorizontal: 10, color: 'black', borderWidth: 1, borderRadius: 5, },

    list_item_container: { maxHeight: 140, backgroundColor: 'white', borderTopWidth: 0, borderWidth: 1, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, },
    item_container: { paddingVertical: 5, },
    item: { color: 'black', },

    no_found_text: {},
})

export default Dropdown