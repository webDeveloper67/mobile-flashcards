import React from 'react'
import {TouchableOpacity, Platform, Text, StyleSheet} from 'react-native'
import {lightGray, deepBlue, yellow} from '../utils/colors'

const ResetQuizButton = ({onPress}) => {
  return (
    <TouchableOpacity
    style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
    onPress={onPress}>
      <Text style={styles.submitBtnText}>Reset Quiz</Text>
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
    marginTop: 10,
    marginBottom: 20,
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
    marginTop: 10,
    marginBottom: 20,
  },
  submitBtnText: {
    color: yellow,
    fontSize: 22,
    textAlign: 'center'
  }
})

export default ResetQuizButton