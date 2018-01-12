export const ADD_LETTER = 'ADD_LETTER'

export default (newLetter) => {
  return {
    type: ADD_LETTER,
    payload: newLetter
  }
}
