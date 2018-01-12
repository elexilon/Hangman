import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import addLetter from '../actions/AddLetter'

export class InputLetter extends PureComponent {
  constructor(props) {
   super()
   const { letter } = props
   this.state = { letter }
  }

    updateLetter(event) {
      if (event.keyCode === 13) {
        event.preventDefault()
      }
      this.setState({
        letter: this.refs.letter.value
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
          type="text"
          ref="letter"
          className="letter"
          placeholder="letter"
          defaultValue={this.props.letter}
          onChange={this.updateLetter.bind(this)}
          onKeyDown={this.updateLetter.bind(this)} />

        <div className="actions">
          <button className="primary" onClick={this.saveLetter.bind(this)}>Insert</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { addLetter })(InputLetter)
