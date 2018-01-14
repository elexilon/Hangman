import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import addLetter from '../actions/AddLetter'
import PropTypes from 'prop-types'
import './InputLetter.css'

export class InputLetter extends PureComponent {
  static propTypes = {
    disabled: PropTypes.bool.isRequired,
  }


  constructor(props) {
   super()
   const { letter } = props
   this.state = { letter }
  }

  updateLetter(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      if(this.refs.letter.value === "") return
      this.saveLetter()
      this.refs.letter.value = ""
    }
    this.setState({
      letter: this.refs.letter.value,
    })
  }

  saveLetter() {
    const {
      letter
    } = this.state

    const updateLetter = {
      letter,
    }
    console.log(updateLetter)
    this.props.addLetter(updateLetter)
  }

  render() {
    return (
      <div className="editor">
        <input
          autoFocus
          type="text"
          ref="letter"
          className="letter"
          placeholder="next letter?"
          defaultValue={this.props.letter}
          onChange={this.updateLetter.bind(this)}
          onKeyDown={this.updateLetter.bind(this)}
          disabled = {this.props.disabled} />

      </div>
    )
  }
}

export default connect(null, { addLetter })(InputLetter)
