import AsyncStorage from '@react-native-async-storage/async-storage';
import { FLASHCARDS_STORAGE_KEY, formatFlashCardResults } from './_decks';

export async function fetchFlashCardResults () {
  AsyncStorage.clear()
  const results = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);
  return formatFlashCardResults(results);
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

// save answer
export function saveAnswerSelected (title, answer, count) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results);
      data[title].answersSelected[count] = answer;
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
    })
}


// Removing deck
export function removeDeck (title) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results);
      data[title] = undefined;
      delete data[title];
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
    })
}

// clearing selected answer
export function clearAnswerSelected (title) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results);
      data[title].answersSelected.splice(0,data[title].answersSelected.length);
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
    })
}

export function addCardToDeck (title, card) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results);
      data[title].questions.push(card);
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
    })
}