import React from 'react'
import {TouchableOpacity, Platform, StyleSheet} from 'react-native'
import {lightGray} from '../utils/colors'

function BackDecks ({ onPress }) {
  return (
    <TouchableOpacity
    style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
    onPress={onPress}>
      <Text style={styles.submitBtnText}>Back to decks</Text>
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

export default BackDecks