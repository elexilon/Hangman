import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import InputLetter from '../components/InputLetter'
import HangMan from '../components/HangMan'

export class SecretWord extends PureComponent {
  static propTypes = {
    secretword: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  wrongGuessCount(word, guesses) {
    return guesses.filter(letter => word.indexOf(letter) === -1).length
  }

  machLetter(letter, guesses) {
    if (guesses.join('').indexOf(letter) === -1) { return "_" }
    else { return letter }
  }

  showGuess(word, guesses) {
    var arrayWord = word.split('')
    return arrayWord.map(letter => this.machLetter(letter, guesses)).join(' ')
  }

  isWinner(word, guesses) {
    var arrayWord = word.split('')
    return arrayWord.map(letter => this.machLetter(letter, guesses)).join('') === word
  }

  solution(word) {
    return word.split('')
  }


  render() {
    const isWinner = this.isWinner(this.props.secretword, this.props.guesses)
    const wrongCount = this.wrongGuessCount(this.props.secretword, this.props.guesses)

    return (

      <div>
        <HangMan errors={ wrongCount } />
        <InputLetter disabled={ isWinner || wrongCount > 5 } />
        <h1>{ this.showGuess(this.props.secretword, this.props.guesses) }</h1>
        <p>{ this.props.guesses.join(' ') }</p>
      </div>
    )
  }
}

const mapStateToProps = ({ guesses }) => ({
  guesses
})

export default connect(mapStateToProps)(SecretWord)
