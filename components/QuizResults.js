import React, { useEffect } from 'react'
import {setLocalNotification, clearLocalNotification} from '../utils/helpers';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {lightGray, deepBlue} from '../utils/colors';
import {clearAnswerSelected} from '../utils/api'
import {clear_Answer_Selected} from '../actions'
import ResetQuizButton from './ResetQuizButton'
import BackDeckButton from './BackDeckButton'



const QuizResults = (props) => {

  const {entryId} = props.route.params
  const deckInfo = useSelector(state => state.decks[entryId])
  console.log(deckInfo, 'deckInfollll');
  const dispatch = useDispatch()

  const restartQuiz = () => {
    clearAnswerSelected(deckInfo.title)
    dispatch(clear_Answer_Selected(deckInfo.title))
    props.navigation.navigate('CardView', {entryId: deckInfo.title, displayCount: 0})
  }

  const backToDeck = () => {
    clearAnswerSelected(deckInfo.title)
    dispatch(clear_Answer_Selected(deckInfo.title))
    props.navigation.navigate('DeckView', {entryId: deckInfo.title})
  }

  useEffect(() => {
    clearLocalNotification()
    .then(setLocalNotification)
  }, [])

    const correct = deckInfo && deckInfo.answersSelected.filter((item) => item.ans === 'correct').length;

    return (
      <View style={styles.column}>
        <Text style={{fontSize: 20}}>{deckInfo.title} Quiz Complete</Text>
        <Text style={{fontSize: 20}}>Total Questions: {deckInfo.questions.length}</Text>
        <Text style={{fontSize: 20}}>Corrct Answers: {correct}</Text>
        <ResetQuizButton onPress={restartQuiz} />
        <BackDeckButton onPress={backToDeck} />
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default QuizResults