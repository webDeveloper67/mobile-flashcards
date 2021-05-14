import React, {useEffect} from 'react'
import {StyleSheet, Text, View, Platform} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import {AntDesign} from '@expo/vector-icons'; 
import {Entypo} from '@expo/vector-icons'; 
import Constants from 'expo-constants'
import {deepBlue,lightGray} from './utils/colors'
// Components
import Decks from './components/Decks'
import DeckView from './components/DeckView'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import CardView from './components/CardView'
import QuizResults from './components/QuizResults'
// Utils
import {setLocalNotification} from './utils/helpers'
// Redux
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import decksReducer from './reducers/decksReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
  decks: decksReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware())
)


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Provider store={store}>
      <Tab.Navigator
        screenOptions={
          ({ route }) => ({
            tabBarIcon: ({ color }) => {
              if (route.name === 'Decks') {
                return <Entypo name="bookmarks" size={24} color="black" />
              } else if (route.name === 'AddDeck') {
                return <AntDesign name="plussquare" size={24} color="black" />
              }
            },
          })}
        tabBarOptions={{
          activeTintColor: Platform.OS === 'ios' ? deepBlue : lightGray,
          style: {
            height: 56,
            backgroundColor: Platform.OS === 'ios' ? lightGray : deepBlue,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
              width: 0,
              height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
          }
        }}>
        <Tab.Screen
          name="Decks"
          component={Decks}
          options={{ headerShown: false }} />
        <Tab.Screen
          name="AddDeck"
          component={AddDeck}
          options={{ headerShown: false }} />
      </Tab.Navigator>
    </Provider>
  )
}

const Stack = createStackNavigator();


const App = () => {

  useEffect(() => {
    setLocalNotification()
  }, [])

  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <Stack.Navigator>
          <Stack.Screen
          name="Decks"
          component={Tabs} />
          <Stack.Screen
            name="DeckView"
            component={DeckView}
            options={({ route }) => ({
              headerTintColor: red,
              headerStyle: {
                backgroundColor: deepBlue
              },
              title: route.params.entryId,
              headerTitle: route.params.entryId
            })} />
          <Stack.Screen
            name="AddCard"
            component={AddCard}
            options={({ route }) => ({
              headerTintColor: lightGray,
              headerStyle: {
                backgroundColor: deepBlue
              },
              title: 'Add Card'
            })} />
          <Stack.Screen
            name="CardView"
            component={CardView}
            options={({ route }) => ({
              headerTintColor: lightGray,
              headerStyle: {
                backgroundColor: deepBlue
              },
              title: 'Quiz'
            })} />
          <Stack.Screen
            name="QuizResults"
            component={QuizResults}
            options={({ route }) => ({
              headerTintColor: lightGray,
              headerStyle: {
                backgroundColor: deepBlue
              },
              title: 'Quiz'
            })} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}


export default App;