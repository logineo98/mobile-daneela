import { FIRST_SEARCH, SEARCH, SECOND_SEARCH } from '../constants'
import { SEARCH_REDUCER_TYPE } from '../redux_type'

const initialState: SEARCH_REDUCER_TYPE = { first_search: undefined, second_search: undefined, }
interface IAction { type: string, payload: any }

const searchReducer = (state = initialState, action: IAction) => {
    const { type, payload } = action

    switch (type) {

        case FIRST_SEARCH:
            return { ...state, first_search: payload }

        case SECOND_SEARCH:
            return { ...state, second_search: payload }

        case SEARCH:
            return { ...state, first_search: payload.first_search, second_search: payload.second_search }

        default:
            return state
    }
}

export default searchReducer