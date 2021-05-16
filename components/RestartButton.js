import React from 'react'
import {TouchableOpacity, Platform, StyleSheet, Text} from 'react-native'
import {lightGray} from '../utils/colors'

const RestartButton = ({ onPress }) => {
  return (
    <TouchableOpacity
    style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
    onPress={onPress}>
      <Text style={styles.submitBtnText}>Reset Quiz</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  submitBtnText: {
    color: lightGray,
    fontSize: 22,
    textAlign: 'center'
  },
})

export default RestartButton