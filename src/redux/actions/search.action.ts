import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
import { SEARCH_DATA_TYPE, SEARCH_ITEM_TYPE } from '../redux_type'
import { FIRST_SEARCH, SEARCH, SECOND_SEARCH } from '../constants'

export const _search = (data: SEARCH_DATA_TYPE, navigation: DrawerNavigationHelpers) => (dispatch: any) => {
    try {
        const { first_search, second_search } = data

        dispatch({ type: SEARCH, payload: data })

        if (first_search?.key === '3') navigation.navigate('recherche', { key: second_search.key, marchand: true })
        else navigation.navigate('recherche', { key: second_search.key })
    } catch (error) {
        console.log('ERROR SEARCH => ', error)
    }
}

export const _first_search = (data?: SEARCH_ITEM_TYPE) => (dispatch: any) => {
    try {

        dispatch({ type: FIRST_SEARCH, payload: data })
    } catch (error) {
        console.log('ERROR FIRST SEARCH => ', error)
    }
}

export const _second_search = (data?: SEARCH_ITEM_TYPE) => (dispatch: any) => {
    try {

        dispatch({ type: SECOND_SEARCH, payload: data })
    } catch (error) {
        console.log('ERROR SECOND SEARCH => ', error)
    }
}