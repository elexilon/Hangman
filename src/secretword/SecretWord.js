import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './SecretWord.css';
import InputLetter from '../components/InputLetter'
import HangMan from '../components/HangMan'
import WinLost from '../components/WinLost'

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

  showGuess(word, guesses, isLost) {
    var arrayWord = word.split('')
    if(isLost) return <h1>{ word }</h1>
    return <h1>{ arrayWord.map(letter => this.machLetter(letter, guesses)).join(' ') } </h1>
  }

  isWinner(word, guesses) {
    var arrayWord = word.split('')
    return arrayWord.map(letter => this.machLetter(letter, guesses)).join('') === word
  }

  isLost(wrongCount) {
    return wrongCount > 5
  }

  solution(word) {
    return word.split('')
  }


  render() {
    const isWinner = this.isWinner(this.props.secretword, this.props.guesses)
    const wrongCount = this.wrongGuessCount(this.props.secretword, this.props.guesses)

    return (
      <div className="row">
      <br/>
      <br/>
        <div className="col-sm-6">
          <br/>
          <br/>
          <InputLetter disabled={ isWinner || this.isLost(wrongCount) } />
          { this.showGuess(this.props.secretword, this.props.guesses, this.isLost(wrongCount)) }
          <p>{ this.props.guesses.join(' ') }</p>
          <WinLost win={ isWinner } lost={ this.isLost(wrongCount) } />
        </div>
        <div className="col-sm-6">
          <HangMan errors={ wrongCount } />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ guesses }) => ({
  guesses
})

export default connect(mapStateToProps)(SecretWord)
