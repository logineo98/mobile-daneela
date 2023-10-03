import { StyleSheet } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import RouteNavigation from './src/navigations/RouteNavigation'

// my importations
import 'react-native-gesture-handler'


const App = () => {
  return (
    <Provider store={store}>
      <RouteNavigation />
    </Provider>
  )
}

const styles = StyleSheet.create({})

export default App