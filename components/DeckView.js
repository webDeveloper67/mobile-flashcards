import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeDeck, clearAnswerSelected} from '../utils/api'
import {remove_Deck , clear_Answer_Selected} from '../actions'
import AppLoading from 'expo-app-loading'
import {lightGray, deepBlue} from '../utils/colors'
// Button Components
import CardButton from './CardButton'
import QuizButton from './QuizButton'
import RemoveButton from './RemoveButton'


const DeckView = (props) => {
  console.log(props, 'props in deckView');
  const [isReady, setIsReady] = useState(true)

  const dispatch = useDispatch()

  const {entryId} = props.route.params
  const deckInfo = useSelector(state => state.decks[entryId])

  console.log(deckInfo, 'deckInfo in deckView');

  const addCard = () => {
    props.navigation.navigate('AddCard', {entryId: deckInfo.title})
  }

  const startQuiz = () => {
    clearAnswerSelected(deckInfo.title)

    dispatch(clear_Answer_Selected(deckInfo.title))
    props.navigation.navigate('CardView', {entryId: deckInfo.title, displayCount: 0})
  }

  const removeingDeck = () => {
    setIsReady(false)

    removeDeck(deckInfo.title)
    dispatch(remove_Deck(deckInfo.title))
    props.navigation.popToTop()
  }
   
    if (isReady === false) {
        return <AppLoading />
    }

    return (
      <View style={styles.column}>
        <Text style={{fontSize: 20}}>{deckInfo.title}</Text>
        <Text style={{fontSize: 20}}>{deckInfo.questions.length} cards</Text>
        <CardButton onPress={addCard} />
        <QuizButton onPress={startQuiz} />
        <RemoveButton onPress={removeingDeck} />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: deepBlue,
  },
  column: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default DeckView