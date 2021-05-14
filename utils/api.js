import AsyncStorage from '@react-native-async-storage/async-storage';
import { FLASHCARDS_STORAGE_KEY, formatFlashCardResults } from './_decks';

export function fetchFlashCardResults () {
  AsyncStorage.clear()
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
  .then(formatFlashCardResults)
}

export function saveDeckTitle (title) {
  const entry = {
    title: title,
    questions: [],
    answersSelected: []
  }
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [title]: entry,
  }))
}