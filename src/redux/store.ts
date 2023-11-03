import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
// reducers
import searchReducer from './reducers/search.reducer'
import userReducer from './reducers/user.reducer'

// regrouper tous les reducers
const rootReducer = combineReducers({
    search: searchReducer,
    user: userReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export type ROOT_REDUCER_TYPE = ReturnType<typeof rootReducer>

export default store