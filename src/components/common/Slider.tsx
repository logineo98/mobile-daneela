import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { FC } from 'react'
import Swiper from 'react-native-swiper'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
// my importations
import { colors, images } from '../../utils/constants'

type COMPONENT_TYPE = {
    navigation: DrawerNavigationHelpers,
}

const Slider: FC<COMPONENT_TYPE> = (props) => {
    const { navigation } = props

    const { height, width } = useWindowDimensions()

    return (
        <Swiper style={styles.slider_global_container} autoplay={true} activeDotStyle={{ backgroundColor: colors.main }}>
            <View style={styles.slider_container}>
                <View style={[styles.slider1_container, { width, }]}>
                    <TouchableOpacity style={[styles.slider1, { width: width < 640 ? width : (width / 2) - 10, marginRight: width < 640 ? 0 : 10 }]} activeOpacity={0.5} onPress={() => navigation.navigate('detail')}>
                        <ImageBackground source={images.arriere} resizeMode='cover' style={styles.image_arriere_container}>
                            <View style={styles.image_avant_info_container}>
                                <View style={[styles.image_avant_container, {}]}>
                                    <Image source={images.avant} style={styles.image_avant} />
                                </View>
                                <View style={[styles.info_container, { width: width < 640 ? (width - 150) : ((width / 2) - 150), }]}>
                                    <Text numberOfLines={1} style={styles.info_title}>Zone d'affaire</Text>
                                    <View style={styles.info_icon_name_container}>
                                        <View style={styles.info_icon_container}>
                                            <Image source={images.certificated} style={styles.info_icon} />
                                        </View>
                                        <Text numberOfLines={1} style={styles.info_name}>Marchand certifié</Text>
                                    </View>
                                    <Text numberOfLines={1} style={styles.info_adresse}>Kalaban Koura</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.slider1, { width: width < 640 ? width : (width / 2) - 10, marginRight: width < 640 ? 0 : 10 }]} activeOpacity={0.5} onPress={() => navigation.navigate('detail')}>
                        <ImageBackground source={images.arriere} resizeMode='cover' style={styles.image_arriere_container}>
                            <View style={styles.image_avant_info_container}>
                                <View style={styles.image_avant_container}>
                                    <Image source={images.avant} style={styles.image_avant} />
                                </View>
                                <View style={[styles.info_container, { width: width < 640 ? (width - 150) : ((width / 2) - 150), }]}>
                                    <Text numberOfLines={1} style={styles.info_title}>Zone d'affaire</Text>
                                    <View style={styles.info_icon_name_container}>
                                        <View style={styles.info_icon_container}>
                                            <Image source={images.certificated} style={styles.info_icon} />
                                        </View>
                                        <Text numberOfLines={1} style={styles.info_name}>Marchand certifié</Text>
                                    </View>
                                    <Text numberOfLines={1} style={styles.info_adresse}>Kalaban Koura</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

                <View style={[styles.slider1_container, { width, }]}>
                    <TouchableOpacity style={[styles.slider1, { width: width < 640 ? width : (width / 2) - 10, marginRight: width < 640 ? 0 : 10 }]} activeOpacity={0.5} onPress={() => navigation.navigate('detail')}>
                        <ImageBackground source={images.arriere} resizeMode='cover' style={styles.image_arriere_container}>
                            <View style={styles.image_avant_info_container}>
                                <View style={[styles.image_avant_container, {}]}>
                                    <Image source={images.avant} style={styles.image_avant} />
                                </View>
                                <View style={[styles.info_container, { width: width < 640 ? (width - 150) : ((width / 2) - 150), }]}>
                                    <Text numberOfLines={1} style={styles.info_title}>Zone d'affaire</Text>
                                    <View style={styles.info_icon_name_container}>
                                        <View style={styles.info_icon_container}>
                                            <Image source={images.certificated} style={styles.info_icon} />
                                        </View>
                                        <Text numberOfLines={1} style={styles.info_name}>Marchand certifié</Text>
                                    </View>
                                    <Text numberOfLines={1} style={styles.info_adresse}>Kalaban Koura</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.slider1, { width: width < 640 ? width : (width / 2) - 10, marginRight: width < 640 ? 0 : 10 }]} activeOpacity={0.5} onPress={() => navigation.navigate('detail')}>
                        <ImageBackground source={images.arriere} resizeMode='cover' style={styles.image_arriere_container}>
                            <View style={styles.image_avant_info_container}>
                                <View style={styles.image_avant_container}>
                                    <Image source={images.avant} style={styles.image_avant} />
                                </View>
                                <View style={[styles.info_container, { width: width < 640 ? (width - 150) : ((width / 2) - 150), }]}>
                                    <Text numberOfLines={1} style={styles.info_title}>Zone d'affaire</Text>
                                    <View style={styles.info_icon_name_container}>
                                        <View style={styles.info_icon_container}>
                                            <Image source={images.certificated} style={styles.info_icon} />
                                        </View>
                                        <Text numberOfLines={1} style={styles.info_name}>Marchand certifié</Text>
                                    </View>
                                    <Text numberOfLines={1} style={styles.info_adresse}>Kalaban Koura</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.slider_container}>
                <View style={[styles.slider1_container, { width, }]}>
                    <TouchableOpacity style={[styles.slider1, { width: width < 640 ? width : (width / 2) - 10, marginRight: width < 640 ? 0 : 10 }]} activeOpacity={0.5} onPress={() => navigation.navigate('detail')}>
                        <ImageBackground source={images.arriere} resizeMode='cover' style={styles.image_arriere_container}>
                            <View style={styles.image_avant_info_container}>
                                <View style={[styles.image_avant_container, {}]}>
                                    <Image source={images.avant} style={styles.image_avant} />
                                </View>
                                <View style={[styles.info_container, { width: width < 640 ? (width - 150) : ((width / 2) - 150), }]}>
                                    <Text numberOfLines={1} style={styles.info_title}>Zone d'affaire</Text>
                                    <View style={styles.info_icon_name_container}>
                                        <View style={styles.info_icon_container}>
                                            <Image source={images.certificated} style={styles.info_icon} />
                                        </View>
                                        <Text numberOfLines={1} style={styles.info_name}>Marchand certifié</Text>
                                    </View>
                                    <Text numberOfLines={1} style={styles.info_adresse}>Kalaban Koura</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.slider1, { width: width < 640 ? width : (width / 2) - 10, marginRight: width < 640 ? 0 : 10 }]} activeOpacity={0.5} onPress={() => navigation.navigate('detail')}>
                        <ImageBackground source={images.arriere} resizeMode='cover' style={styles.image_arriere_container}>
                            <View style={styles.image_avant_info_container}>
                                <View style={styles.image_avant_container}>
                                    <Image source={images.avant} style={styles.image_avant} />
                                </View>
                                <View style={[styles.info_container, { width: width < 640 ? (width - 150) : ((width / 2) - 150), }]}>
                                    <Text numberOfLines={1} style={styles.info_title}>Zone d'affaire</Text>
                                    <View style={styles.info_icon_name_container}>
                                        <View style={styles.info_icon_container}>
                                            <Image source={images.certificated} style={styles.info_icon} />
                                        </View>
                                        <Text numberOfLines={1} style={styles.info_name}>Marchand certifié</Text>
                                    </View>
                                    <Text numberOfLines={1} style={styles.info_adresse}>Kalaban Koura</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

                <View style={[styles.slider1_container, { width, }]}>
                    <TouchableOpacity style={[styles.slider1, { width: width < 640 ? width : (width / 2) - 10, marginRight: width < 640 ? 0 : 10 }]} activeOpacity={0.5} onPress={() => navigation.navigate('detail')}>
                        <ImageBackground source={images.arriere} resizeMode='cover' style={styles.image_arriere_container}>
                            <View style={styles.image_avant_info_container}>
                                <View style={[styles.image_avant_container, {}]}>
                                    <Image source={images.avant} style={styles.image_avant} />
                                </View>
                                <View style={[styles.info_container, { width: width < 640 ? (width - 150) : ((width / 2) - 150), }]}>
                                    <Text numberOfLines={1} style={styles.info_title}>Zone d'affaire</Text>
                                    <View style={styles.info_icon_name_container}>
                                        <View style={styles.info_icon_container}>
                                            <Image source={images.certificated} style={styles.info_icon} />
                                        </View>
                                        <Text numberOfLines={1} style={styles.info_name}>Marchand certifié</Text>
                                    </View>
                                    <Text numberOfLines={1} style={styles.info_adresse}>Kalaban Koura</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.slider_container}>
                <View style={[styles.slider1_container, { width, }]}>
                    <TouchableOpacity style={[styles.slider1, { width: width < 640 ? width : (width / 2) - 10, marginRight: width < 640 ? 0 : 10 }]} activeOpacity={0.5} onPress={() => navigation.navigate('detail')}>
                        <ImageBackground source={images.arriere} resizeMode='cover' style={styles.image_arriere_container}>
                            <View style={styles.image_avant_info_container}>
                                <View style={[styles.image_avant_container, {}]}>
                                    <Image source={images.avant} style={styles.image_avant} />
                                </View>
                                <View style={[styles.info_container, { width: width < 640 ? (width - 150) : ((width / 2) - 150), }]}>
                                    <Text numberOfLines={1} style={styles.info_title}>Zone d'affaire</Text>
                                    <View style={styles.info_icon_name_container}>
                                        <View style={styles.info_icon_container}>
                                            <Image source={images.certificated} style={styles.info_icon} />
                                        </View>
                                        <Text numberOfLines={1} style={styles.info_name}>Marchand certifié</Text>
                                    </View>
                                    <Text numberOfLines={1} style={styles.info_adresse}>Kalaban Koura</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.slider1, { width: width < 640 ? width : (width / 2) - 10, marginRight: width < 640 ? 0 : 10 }]} activeOpacity={0.5} onPress={() => navigation.navigate('detail')}>
                        <ImageBackground source={images.arriere} resizeMode='cover' style={styles.image_arriere_container}>
                            <View style={styles.image_avant_info_container}>
                                <View style={styles.image_avant_container}>
                                    <Image source={images.avant} style={styles.image_avant} />
                                </View>
                                <View style={[styles.info_container, { width: width < 640 ? (width - 150) : ((width / 2) - 150), }]}>
                                    <Text numberOfLines={1} style={styles.info_title}>Zone d'affaire</Text>
                                    <View style={styles.info_icon_name_container}>
                                        <View style={styles.info_icon_container}>
                                            <Image source={images.certificated} style={styles.info_icon} />
                                        </View>
                                        <Text numberOfLines={1} style={styles.info_name}>Marchand certifié</Text>
                                    </View>
                                    <Text numberOfLines={1} style={styles.info_adresse}>Kalaban Koura</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

                <View style={[styles.slider1_container, { width, }]}>
                    <TouchableOpacity style={[styles.slider1, { width: width < 640 ? width : (width / 2) - 10, marginRight: width < 640 ? 0 : 10 }]} activeOpacity={0.5} onPress={() => navigation.navigate('detail')}>
                        <ImageBackground source={images.arriere} resizeMode='cover' style={styles.image_arriere_container}>
                            <View style={styles.image_avant_info_container}>
                                <View style={[styles.image_avant_container, {}]}>
                                    <Image source={images.avant} style={styles.image_avant} />
                                </View>
                                <View style={[styles.info_container, { width: width < 640 ? (width - 150) : ((width / 2) - 150), }]}>
                                    <Text numberOfLines={1} style={styles.info_title}>Zone d'affaire</Text>
                                    <View style={styles.info_icon_name_container}>
                                        <View style={styles.info_icon_container}>
                                            <Image source={images.certificated} style={styles.info_icon} />
                                        </View>
                                        <Text numberOfLines={1} style={styles.info_name}>Marchand certifié</Text>
                                    </View>
                                    <Text numberOfLines={1} style={styles.info_adresse}>Kalaban Koura</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        </Swiper>
    )
}

const styles = StyleSheet.create({
    // marchand certifié slider
    slider_global_container: { height: 280, },
    slider_container: {},
    slider1_container: { marginVertical: 10, flexDirection: 'row', alignItems: 'center', },
    slider1: { borderRadius: 5, },
    image_arriere_container: { padding: 10, borderRadius: 5, },
    image_avant_info_container: { flexDirection: 'row', alignItems: 'center', },
    image_avant_container: { backgroundColor: colors.white, padding: 5, height: 100, width: 100, borderRadius: 5, },
    image_avant: { height: '100%', width: '100%', resizeMode: 'contain', },
    info_container: { marginLeft: 10, height: 100, justifyContent: 'space-between', },
    info_title: { color: colors.white, fontWeight: '600', },
    info_icon_name_container: { flexDirection: 'row', alignItems: 'center', },
    info_icon_container: { height: 18, width: 18, },
    info_icon: { height: '100%', width: '100%', resizeMode: 'cover', },
    info_name: { color: colors.white, marginLeft: 5, },
    info_adresse: { color: colors.white, },
})

export default Slider
