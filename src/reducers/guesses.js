import { ADD_LETTER } from '../actions/AddLetter'

const guesses = []

export default function(state = guesses, action) {
  switch (action.type) {
    case ADD_LETTER:
     return [...state, action.payload.letter.trim().toLowerCase()[0]]
    default:
      return state
  }
}
