import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import {lightGray} from '../utils/colors'

const Button = ({ children, onPress, style = {} }) => {
  return (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.reset, style]}>{children}</Text>
  </TouchableOpacity>
)
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: lightGray,
  }
})

export default Button