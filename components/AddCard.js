import React, {useState} from 'react'
import {Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {lightGray, deepBlue} from '../utils/colors';
import {add_Card_To_Deck} from '../actions'
import {addCardToDeck} from '../utils/api'
import {CommonActions} from '@react-navigation/native';

const AddCard = (props) => {

  const [cardData, setCardData] = useState({
    question: '',
    answer: ''
  })

  const {question, answer} = cardData

  const dispatch = useDispatch()

  const {entryId} = props.route.params
  const title = entryId

  onChangeQuestion = (text) => {
    setCardData({...cardData, question: text})
  }
  onChangeAnswer = (text) => {
    setCardData({...cardData, answer: text})
  }

  onPress = () => {
    addCardToDeck(title, {question, answer})
    .then(() => dispatch(add_Card_To_Deck(title, {question, answer})))
    .then(() => {
      props.navigation.dispatch(CommonActions.goBack());
    })
  }

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Add a question here..."
        onChangeText={onChangeQuestion}
        value={question}
        />
        <TextInput
        style={styles.input}
        placeholder="Add the answer here..."
        onChangeText={onChangeAnswer}
        value={answer}
        />
        <TouchableOpacity onPress={onPress}>
          <Text style={{fontSize: 20}}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: lightGray,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  row: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});


export default AddCard