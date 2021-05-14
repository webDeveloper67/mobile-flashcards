import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {receive_Decks} from '../actions'
import {deepBlue, lightGray, yellow} from '../utils/colors'
import Button from './Button'
import AppLoading from 'expo-app-loading'
import { fetchFlashCardResults } from '../utils/api'

const Decks = (props) => {

  const [isReady, setIsReady] = useState(false)
  const dispatch = useDispatch()

  const decks = useSelector(state => state.decks)

  useEffect(() => {
    fetchFlashCardResults()
      .then(decks => dispatch(receive_Decks(decks)))
      .then(() => setIsReady(true))
  }, [])

  if(isReady === false) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      {
        Object.keys(decks).map((key) => {
          const { title, questions } = decks[key]
          return (
            <View key={key} style={styles.column}>
            <TouchableOpacity onPress={() => props.navigation.navigate('DeckView', {entryId: title}) }>
              <Text style={{fontSize: 20, color:yellow, fontWeight: 'bold'}}>{title}</Text>
              <Text style={{fontSize: 18, color:yellow}}>{questions.length} cards</Text>
            </TouchableOpacity>
            </View>
          )
        })
      }
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: lightGray,
  },
  column: {
    flexDirection: 'column',
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: deepBlue,
  }
})

export default Decks