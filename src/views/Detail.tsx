import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { FC, useCallback, useState } from 'react'
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
// my importations
import ScreenContainer from '../components/common/ScreenContainer'
import { colors, images } from '../utils/constants'
import Loading from '../components/common/Loading'
import { Rating } from 'react-native-ratings'
// my icons
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

type COMPONENT_TYPE = { navigation: DrawerNavigationHelpers, screenName: string }

const Detail: FC<COMPONENT_TYPE> = (props) => {
    const { navigation, screenName } = props

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
            <ScreenContainer refreshing={refreshing} onRefresh={onRefresh} screenName={screenName} navigation={navigation}>
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
                            <Rating imageSize={16} ratingCount={5} startingValue={4} readonly style={styles.info_rating} />
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
                                                <Feather name='phone-call' color={colors.black} size={25} style={styles.phone_web_site_icon} />
                                                <Text style={styles.phone_web_site_name}>APPELER</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity activeOpacity={0.5} style={styles.icon_name_container}>
                                                <Fontisto name='world-o' color={colors.black} size={25} style={styles.phone_web_site_icon} />
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

                                {menu.avis &&
                                    <View style={styles.menu_content_avis}>
                                        {/* info avis et bouton se connecter avec facebook */}
                                        <View style={styles.avis_give_a_note_container}>
                                            <FontAwesome5 name='user-circle' color={colors.black} size={40} />
                                            <Text style={styles.avis_text_gras}>Donner une note</Text>
                                            <Text style={styles.avis_text_light}>Partager votre expérience afin d'aider les autres utilisateur</Text>
                                            <Rating imageSize={25} ratingCount={5} startingValue={4} readonly style={styles.info_rating} />
                                            <TouchableOpacity activeOpacity={0.5} style={styles.avis_login_fb_container}>
                                                <Text style={styles.avis_login_fb_text}>Se connecter avec facebook</Text>
                                            </TouchableOpacity>
                                        </View>
                                        {/* statisque des avis */}
                                        <View style={styles.avis_statistique_container}>
                                            <Text style={styles.avis_statistique_title}>Résumé des notes clients</Text>
                                            <View style={styles.avis_stat_horiz_note_rating_container}>
                                                <View style={styles.avis_stat_horiz_container}>
                                                    {[5, 4, 3, 2, 1].map(value => (
                                                        <View style={styles.avis_stat_horiz_content} key={value}>
                                                            <Text style={styles.avis_stat_horiz_content_title}>{value}</Text>
                                                            <View style={styles.avis_stat_horiz_content_value} />
                                                        </View>
                                                    ))}
                                                </View>
                                                <View style={styles.avis_note_rating_container}>
                                                    <Text style={styles.avis_note}>0.0</Text>
                                                    <Rating imageSize={16} ratingCount={5} startingValue={4} readonly style={styles.info_rating} />
                                                </View>
                                            </View>
                                        </View>
                                        {/* commentaires et avis */}
                                        <View style={styles.avis_commentaire_container}>
                                            <View style={styles.avis_commentaire_header_container}>
                                                <Text style={styles.avis_commentaire_header_title}>Commentaires et avis</Text>
                                                <TouchableOpacity activeOpacity={0.5} style={styles.avis_commentaire_header_btn_container}>
                                                    <Text style={styles.avis_commentaire_header_btn_name}>Donner votre avis</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                }

                                {menu.proposition &&
                                    <View style={styles.menu_content_proposition}>
                                        {/* service supplémentaire */}
                                        <View style={styles.proposition_content_title_container}>
                                            <Text style={styles.proposition_content_title}>Services supplémentaires</Text>
                                            <View style={styles.proposition_content_container}>
                                                <Text style={styles.proposition_content_container_title}>Livraison à domicile : </Text>
                                                <Text style={styles.proposition_content_container_value}>Payante</Text>
                                            </View>
                                            <View style={styles.proposition_content_container}>
                                                <Text style={styles.proposition_content_container_title}>Service après vente : </Text>
                                                <Text style={styles.proposition_content_container_value}>Oui</Text>
                                            </View>
                                        </View>
                                        {/* fourchette de prix */}
                                        <View style={styles.proposition_content_title_container}>
                                            <Text style={styles.proposition_content_title}>Fourchette de prix</Text>
                                            <View style={styles.proposition_content_container}>
                                                <Text style={styles.proposition_content_container_title}>Minimum : </Text>
                                                <Text style={styles.proposition_content_container_value}>1000</Text>
                                            </View>
                                            <View style={styles.proposition_content_container}>
                                                <Text style={styles.proposition_content_container_title}>Maximum : </Text>
                                                <Text style={styles.proposition_content_container_value}>100000</Text>
                                            </View>
                                        </View>
                                        {/* categories */}
                                        <View style={styles.proposition_content_title_container}>
                                            <Text style={styles.proposition_content_title}>Catégories</Text>
                                            <View style={styles.proposition_content_categories_container}>
                                                <Text style={styles.proposition_content_categorie}>Alimentation</Text>
                                                <Text style={styles.proposition_content_categorie}>Immobilier/Déco</Text>
                                                <Text style={styles.proposition_content_categorie}>Supermarché</Text>
                                                <Text style={styles.proposition_content_categorie}>Jeu</Text>
                                                <Text style={styles.proposition_content_categorie}>Sport</Text>
                                                <Text style={styles.proposition_content_categorie}>Restaurations</Text>
                                                <Text style={styles.proposition_content_categorie}>Fashion</Text>
                                            </View>
                                        </View>
                                        {/* sous-categories */}
                                        <View style={styles.proposition_content_title_container}>
                                            <Text style={styles.proposition_content_title}>Sous catégories</Text>
                                            <View style={styles.proposition_content_categories_container}>
                                                <Text style={styles.proposition_content_categorie}>Produit laitier</Text>
                                                <Text style={styles.proposition_content_categorie}>Boites de conserve</Text>
                                                <Text style={styles.proposition_content_categorie}>Céreale</Text>
                                                <Text style={styles.proposition_content_categorie}>Pommade</Text>
                                                <Text style={styles.proposition_content_categorie}>Parfum</Text>
                                                <Text style={styles.proposition_content_categorie}>Bricolages électronique</Text>
                                                <Text style={styles.proposition_content_categorie}>Plats Africain </Text>
                                            </View>
                                        </View>
                                    </View>
                                }

                                {menu.about &&
                                    <View style={styles.menu_content_about}>
                                        <View style={styles.about_content_icon_info_container}>
                                            <View style={styles.about_content_icon_info}>
                                                <MaterialIcons name='info' color={colors.black} size={16} style={styles.about_content_icon} />
                                                <Text style={styles.about_content_info}>Vente electronique</Text>
                                            </View>
                                            <View style={styles.about_content_icon_info}>
                                                <MaterialIcons name='phone-enabled' color={colors.black} size={16} style={styles.about_content_icon} />
                                                <Text style={styles.about_content_info}>+223 78012828</Text>
                                            </View>
                                            <View style={styles.about_content_icon_info}>
                                                <MaterialIcons name='email' color={colors.black} size={16} style={styles.about_content_icon} />
                                                <Text style={styles.about_content_info}>saggato@gmail.com</Text>
                                            </View>
                                        </View>

                                        <View style={styles.about_content_social_link_title_container}>
                                            <Text style={styles.about_content_social_link_title}>Lien Reseaux Sociaux</Text>
                                            <View style={styles.about_content_social_link_container}>
                                                <TouchableOpacity activeOpacity={0.5} style={[styles.about_content_social_link, { backgroundColor: colors.facebook_color }]}>
                                                    <Feather name='facebook' color={colors.white} size={20} style={styles.about_content_social_link_icon} />
                                                </TouchableOpacity>
                                                <TouchableOpacity activeOpacity={0.5} style={[styles.about_content_social_link, { backgroundColor: colors.instagram_color }]}>
                                                    <AntDesign name='instagram' color={colors.white} size={20} style={styles.about_content_social_link_icon} />
                                                </TouchableOpacity>
                                                <TouchableOpacity activeOpacity={0.5} style={[styles.about_content_social_link, { backgroundColor: colors.linkedin_color }]}>
                                                    <Feather name='linkedin' color={colors.white} size={20} style={styles.about_content_social_link_icon} />
                                                </TouchableOpacity>
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
    info_rating: {},

    menu_container: {},
    menu_name_container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: colors.light_gray, marginTop: 10, },
    menu_name: { position: 'relative', },
    menu_name_text: { color: colors.black, textAlign: 'center', },
    menu_active: { height: 2, width: '100%', position: 'absolute', bottom: 0, backgroundColor: colors.main, textAlign: 'center', borderRadius: 10, },

    menu_content_container: {},
    // aperçu
    menu_content_apercu: {},
    phone_web_site_container: { paddingVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderBottomWidth: 1, borderBottomColor: colors.light_gray, },
    icon_name_container: { alignItems: 'center', },
    phone_web_site_icon: {},
    phone_web_site_name: { color: colors.black, },
    featured_product_container: { padding: 10, },
    featured_product_title: { color: colors.black, fontSize: 16, fontWeight: '600', marginBottom: 10, },
    featured_product_images_container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', },
    featured_product_image_container: { width: '32%' },
    featured_product_image: { height: '100%', width: '100%', resizeMode: 'cover', },
    // avis
    menu_content_avis: {},
    avis_give_a_note_container: { padding: 10, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: colors.light_gray, },
    avis_text_gras: { color: colors.black, fontWeight: '600', },
    avis_text_light: { color: colors.light_gray, fontSize: 12, textAlign: 'center', marginBottom: 15, },
    avis_login_fb_container: { backgroundColor: colors.facebook_color, marginTop: 5, },
    avis_login_fb_text: { color: colors.white, textTransform: 'uppercase', padding: 10, },

    avis_statistique_container: { padding: 10, borderBottomWidth: 1, borderBottomColor: colors.light_gray, },
    avis_statistique_title: { color: colors.black, marginBottom: 10, },
    avis_stat_horiz_note_rating_container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', },
    avis_stat_horiz_container: { width: '65%', },
    avis_stat_horiz_content: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', },
    avis_stat_horiz_content_title: { width: 10, color: colors.main_black, },
    avis_stat_horiz_content_value: { height: 10, width: '92%', backgroundColor: colors.light_gray, borderRadius: 10, },
    avis_note_rating_container: { alignItems: 'center', },
    avis_note: { color: colors.black, fontSize: 30, },

    avis_commentaire_container: { padding: 10, },
    avis_commentaire_header_container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', },
    avis_commentaire_header_title: { color: colors.black, },
    avis_commentaire_header_btn_container: { borderWidth: 1, borderColor: colors.light_gray, borderRadius: 5, },
    avis_commentaire_header_btn_name: { color: colors.black, paddingHorizontal: 10, paddingVertical: 3, },
    // proposition
    menu_content_proposition: { padding: 10, },
    proposition_content_title_container: {},
    proposition_content_title: { color: colors.black, fontSize: 16, fontWeight: '600', marginBottom: 5, },
    proposition_content_container: { flexDirection: 'row', alignItems: 'center', marginBottom: 5, },
    proposition_content_container_title: { color: colors.black, },
    proposition_content_container_value: { color: colors.light_gray, fontSize: 13, },
    proposition_content_categories_container: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', padding: 10, borderWidth: 1, borderColor: colors.light_gray, borderRadius: 10, marginBottom: 5, },
    proposition_content_categorie: { backgroundColor: colors.tomato, color: colors.white, fontSize: 13, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, marginRight: 5, marginBottom: 5, },
    // about
    menu_content_about: {},
    about_content_icon_info_container: { padding: 10, paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: colors.light_gray, },
    about_content_icon_info: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, },
    about_content_icon: {},
    about_content_info: { marginLeft: 5, color: colors.black, fontSize: 13, },
    about_content_social_link_title_container: { padding: 10, },
    about_content_social_link_title: { color: colors.black, fontSize: 16, fontWeight: '600', marginBottom: 10, },
    about_content_social_link_container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', },
    about_content_social_link: { padding: 15, borderRadius: 50, },
    about_content_social_link_icon: {},

})

export default Detail