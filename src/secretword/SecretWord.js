import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import InputLetter from '../components/InputLetter'

export class SecretWord extends PureComponent {
  static propTypes = {
    secretword: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  machLetter(letter, guesses) {
    if (guesses.join('').indexOf(letter) === -1) { return "_" }
    else { return letter }
  }

  showGuess(word, guesses) {
    var arrayWord = word.split('')
    return arrayWord.map(letter => this.machLetter(letter, guesses)).join(' ')
  }

  render() {
    return (
      <div>
        <InputLetter />
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
