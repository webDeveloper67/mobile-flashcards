import React from 'react'
import {Text, TouchableOpacity, Platform, StyleSheet} from 'react-native'
import {deepBlue, yellow} from '../utils/colors'

const QuizButton = ({ onPress }) => {
  return (
    <TouchableOpacity
    style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
    onPress={onPress}>
      <Text style={styles.submitBtnText}>Start Quiz</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iosSubmitBtn: {
    backgroundColor: deepBlue,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20

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
    marginBottom: 20

  },
  submitBtnText: {
    color: yellow,
    fontSize: 22,
    textAlign: 'center'
  }
})

export default QuizButton