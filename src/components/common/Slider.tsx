import { FlatList, Image, ImageBackground, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { FC, useEffect, useRef, useState } from 'react'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
// my importations
import MarchandCard from '../cards/MarchandCard'

type COMPONENT_TYPE = {
    navigation: DrawerNavigationHelpers,
}

const Slider: FC<COMPONENT_TYPE> = (props) => {
    const { navigation } = props
    const { width } = useWindowDimensions()
    const slider_data = [
        { id: '1', image: 'tz nation' },
        { id: '2', image: 'diabate' },
        { id: '3', image: 'diabate' },
    ]

    const [activeIndex, setActiveIndex] = useState(0)
    const scrollViewRef = useRef<ScrollView>(null)

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { nativeEvent } = event
        const scroll_position = nativeEvent.contentOffset.x
        const index = Math.floor(scroll_position / width)
        setActiveIndex(index)
    }

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % slider_data.length
            scrollViewRef.current?.scrollTo({ x: nextIndex * (width - 20), animated: true })
            setActiveIndex(nextIndex)
        }, 1500)

        return () => clearInterval(scrollInterval)
    }, [activeIndex])

    return (
        <View style={styles.slider_global_container}>
            <ScrollView
                ref={scrollViewRef}
                onScroll={handleScroll}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
            >
                {slider_data.map((item, index) => (
                    <View key={item.id} style={styles.slider}>
                        <MarchandCard slider navigation={navigation} />

                        <MarchandCard slider navigation={navigation} />
                    </View>
                ))}
            </ScrollView>
            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 10, }}>
                {slider_data?.slice(0, Math.floor(slider_data?.length / 2))?.map((data, index) => (
                    <View key={index} style={{ backgroundColor: index === activeIndex ? 'green' : '#ddd', height: 12, width: 12, borderRadius: 12, marginHorizontal: 5, }} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // marchand certifié slider
    slider_global_container: { height: 285, position: 'relative', },
    slider_container: {},
    slider: {},
})

export default Slider
