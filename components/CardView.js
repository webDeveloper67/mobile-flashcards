import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deepBlue, yellow} from '../utils/colors';
import {saveAnswerSelected} from '../utils/api'
import {save_Answer_Selected} from '../actions'

const CardView = (props) => {

  const dispatch = useDispatch()
  const {entryId, displayCount} = props.route.params
  const deckInfo = useSelector(state => state.decks[entryId])

  const correctPressed = () => {
    saveAnswerSelected(deckInfo.title, {ans: 'correct'}, displayCount)
    dispatch(save_Answer_Selected(deckInfo.title, {ans: 'correct'}, displayCount))

    if ((displayCount+1) === deckInfo.questions.length) {
      props.navigation.navigate('QuizResults', { entryId: deckInfo.title })
    }
    else {
      props.navigation.push('CardView', {entryId: deckInfo.title, displayCount: (displayCount+1)})
    }
  }

  const incorrectPressed = () => {
    saveAnswerSelected(deckInfo.title, {ans: 'incorrect'}, displayCount)
    dispatch(save_Answer_Selected(deckInfo.title, {ans: 'incorrect'}, displayCount))

    if ((displayCount+1) === deckInfo.questions.length) {
      props.navigation.navigate('QuizResults', { entryId: deckInfo.title })
    }
    else {
      props.navigation.push('CardView', {entryId: deckInfo.title, displayCount: (displayCount+1)})
    }
  }

    if (deckInfo.questions.length === 0) {
      return (
        <View style={styles.container}>
          <Text> There are no card in this deck, please add some cards before starting a quiz.</Text>
        </View>
      )
    }
    return (
      <View style={styles.column}>
        <View>
          <Text style={styles.Text}>{(displayCount+1)} / {deckInfo.questions.length}</Text>
        </View>
        <View>
          <View style={styles.flipCard}>
            <Text>Question: {deckInfo.questions[displayCount].question}</Text>
            <Text>Answer: {deckInfo.questions[displayCount].answer}</Text>
          </View>
        </View>
        <TouchableOpacity
        style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
        onPress={correctPressed}>
          <Text style={styles.submitBtnText}>correct</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
        onPress={incorrectPressed}>
          <Text style={styles.submitBtnText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iosSubmitBtn: {
    backgroundColor: deepBlue,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
  },
  androidSubmitBtn: {
    backgroundColor: deepBlue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  submitBtnText: {
    color: yellow,
    fontSize: 22,
    textAlign: 'center'
  },
  indexText: {
    color: deepBlue,
    fontSize: 22,
    textAlign: 'center'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    marginLeft: 30
  }
})


export default CardView

