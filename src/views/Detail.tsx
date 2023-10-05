import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { FC, useCallback, useState } from 'react'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
// my importations
import ScreenContainer from '../components/common/ScreenContainer'
import { colors, images } from '../utils/constants'
import Loading from '../components/common/Loading'
// my icons
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'

type COMPONENT_TYPE = {
    navigation: DrawerNavigationHelpers,
}

const Detail: FC<COMPONENT_TYPE> = (props) => {
    const { navigation } = props

    const init_menu = { apercu: true, avis: false, proposition: false, about: false }

    const { height, width } = useWindowDimensions()

    const [refreshing, setRefreshing] = useState(false)
    const [menu, setMenu] = useState(init_menu)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }, [])

    const handleMenu = (type: string) => {
        if (type === 'apercu') setMenu({ apercu: true, avis: false, proposition: false, about: false })
        else if (type === 'avis') setMenu({ apercu: false, avis: true, proposition: false, about: false })
        else if (type === 'proposition') setMenu({ apercu: false, avis: false, proposition: true, about: false })
        else if (type === 'about') setMenu({ apercu: false, avis: false, proposition: false, about: true })
    }

    return (
        refreshing ? <Loading /> :
            <ScreenContainer refreshing={refreshing} onRefresh={onRefresh} navigation={navigation}>
                <View style={styles.detail_container}>
                    <View style={styles.detail}>
                        {/* the 3 images background, featured and vitepay */}
                        <View>
                            <View style={styles.image_arriere_container}>
                                <Image source={images.arriere} style={styles.image_arriere} />
                            </View>
                            <View style={[styles.image_avant_container, { top: 150, left: (width - ((width / 2) + 50)) }]}>
                                <Image source={images.avant} style={styles.image_avant} />
                            </View>
                            <View style={[styles.image_vitepay_container, { top: 135, left: (width - ((width / 2) + 15)) }]}>
                                <Image source={images.vitepay_logo} style={styles.image_vitepay} />
                            </View>
                        </View>

                        {/* informations */}
                        <View style={styles.info_container}>
                            <View style={styles.info_icon_name_container}>
                                <View style={styles.info_icon_container}>
                                    <Image source={images.certificated} style={styles.info_icon} />
                                </View>
                                <Text style={styles.info_name}>Marchand certifié</Text>
                            </View>
                            <Text style={styles.info_title}>Zone d'affaire</Text>
                            <Text style={styles.info_adresse}>Kalaban Koura</Text>
                        </View>

                        {/* menus */}
                        <View style={styles.menu_container}>
                            <View style={[styles.menu_name_container, {}]}>
                                <TouchableOpacity style={[styles.menu_name, { width: width > 640 ? (width / 4) - 20 : '25%' }]} activeOpacity={0.5} onPress={() => handleMenu('apercu')}>
                                    <Text style={styles.menu_name_text}>Aperçu</Text>
                                    {menu.apercu && <View style={styles.menu_active} />}
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.menu_name, { width: width > 640 ? (width / 4) - 20 : '25%' }]} activeOpacity={0.5} onPress={() => handleMenu('avis')}>
                                    <Text style={styles.menu_name_text}>Avis</Text>
                                    {menu.avis && <View style={styles.menu_active} />}
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.menu_name, { width: width > 640 ? (width / 4) - 20 : '25%' }]} activeOpacity={0.5} onPress={() => handleMenu('proposition')}>
                                    <Text style={styles.menu_name_text}>Propositions</Text>
                                    {menu.proposition && <View style={styles.menu_active} />}
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.menu_name, { width: width > 640 ? (width / 4) - 20 : '25%' }]} activeOpacity={0.5} onPress={() => handleMenu('about')}>
                                    <Text style={styles.menu_name_text}>A propos</Text>
                                    {menu.about && <View style={styles.menu_active} />}
                                </TouchableOpacity>
                            </View>

                            <View style={styles.menu_content_container}>
                                {menu.apercu &&
                                    <View style={styles.menu_content_apercu}>
                                        <View style={styles.phone_web_site_container}>
                                            <TouchableOpacity activeOpacity={0.5} style={styles.icon_name_container}>
                                                <Feather name='phone-call' color={colors.black} size={35} style={styles.phone_web_site_icon} />
                                                <Text style={styles.phone_web_site_name}>APPELER</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity activeOpacity={0.5} style={styles.icon_name_container}>
                                                <Fontisto name='world-o' color={colors.black} size={35} style={styles.phone_web_site_icon} />
                                                <Text style={styles.phone_web_site_name}>SITE WEB</Text>
                                            </TouchableOpacity>
                                        </View>

                                        <View style={styles.featured_product_container}>
                                            <Text style={styles.featured_product_title}>Produits Phares</Text>
                                            <View style={styles.featured_product_images_container}>
                                                <View style={[styles.featured_product_image_container, { height: width < 640 ? 120 : 160 }]}>
                                                    <Image source={images.arriere} style={styles.featured_product_image} />
                                                </View>
                                                <View style={[styles.featured_product_image_container, { height: width < 640 ? 120 : 160 }]}>
                                                    <Image source={images.arriere} style={styles.featured_product_image} />
                                                </View>
                                                <View style={[styles.featured_product_image_container, { height: width < 640 ? 120 : 160 }]}>
                                                    <Image source={images.arriere} style={styles.featured_product_image} />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    detail_container: { padding: 10, },

    detail: { elevation: 5, backgroundColor: colors.white, borderRadius: 5, position: 'relative', },

    image_arriere_container: { height: 200, width: '100%' },
    image_arriere: { height: '100%', width: '100%', resizeMode: 'cover' },
    image_avant_container: { backgroundColor: colors.white, zIndex: 10, height: 100, width: 100, padding: 5, borderRadius: 5, borderWidth: 1, borderColor: colors.light_gray, position: 'absolute', },
    image_avant: { height: '100%', width: '100%', resizeMode: 'cover' },
    image_vitepay_container: { zIndex: 15, backgroundColor: colors.white, height: 30, width: 30, padding: 2, borderRadius: 30, position: 'absolute', },
    image_vitepay: { height: '100%', width: '100%', resizeMode: 'cover' },

    info_container: { marginTop: 60, alignItems: 'center', },
    info_icon_name_container: { flexDirection: 'row', alignItems: 'center', },
    info_icon_container: { height: 18, width: 18, },
    info_icon: { height: '100%', width: '100%', resizeMode: 'cover', },
    info_name: { color: colors.light_gray, marginLeft: 5, },
    info_title: { color: colors.black, fontWeight: '600', fontSize: 20, textAlign: 'justify', marginVertical: 10, },
    info_adresse: { color: colors.black, textAlign: 'justify', marginBottom: 10, },

    menu_container: {},
    menu_name_container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: colors.light_gray, marginTop: 10, },
    menu_name: { position: 'relative', },
    menu_name_text: { color: colors.black, textAlign: 'center', },
    menu_active: { height: 2, width: '100%', position: 'absolute', bottom: 0, backgroundColor: colors.main, textAlign: 'center', borderRadius: 10, },

    menu_content_container: {},
    // aperçu
    menu_content_apercu: {},
    phone_web_site_container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderBottomWidth: 1, borderBottomColor: colors.light_gray, paddingVertical: 15, },
    icon_name_container: { alignItems: 'center', },
    phone_web_site_icon: {},
    phone_web_site_name: { color: colors.black, },

    featured_product_container: { padding: 10, },
    featured_product_title: { color: colors.black, fontSize: 16, fontWeight: '600', marginBottom: 10, },
    featured_product_images_container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', },
    featured_product_image_container: { width: '32%' },
    featured_product_image: { height: '100%', width: '100%', resizeMode: 'cover', },
})

export default Detail