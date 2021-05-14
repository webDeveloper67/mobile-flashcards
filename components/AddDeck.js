import React, {useState} from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {saveDeckTitle} from '../utils/api'
import {lightGray, deepBlue, yellow} from '../utils/colors'
import {save_Deck_Title} from '../actions'
import {CommonActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux'

const AddDeck = (props) => {

  const [query, setQuery] = useState('')
  const dispatch = useDispatch()

  const onChangeText = (text) => {
    setQuery(text)
  }

  const onPress = () => {
    saveDeckTitle(query)
    dispatch(save_Deck_Title(query))
    props.navigation.dispatch(CommonActions.goBack())
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Enter title for deck</Text>
      <TextInput
      style={styles.input}
      placeholder="Deck Title!"
      onChangeText={onChangeText}
      value={query}
      />
      <TouchableOpacity style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn} onPress={onPress}>
        <Text style={styles.submitBtnText}>Submit</Text>
      </TouchableOpacity>
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
  },
  iosSubmitBtn: {
    backgroundColor: deepBlue,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
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
  },
  submitBtnText: {
    color: yellow,
    fontSize: 22,
    textAlign: 'center'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    marginLeft: 30
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5
  },
  row: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: deepBlue
  }
});

export default AddDeck