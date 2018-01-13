import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import man0 from '../images/man0.png'
import man1 from '../images/man1.png'
import man2 from '../images/man2.png'
import man3 from '../images/man3.png'
import man4 from '../images/man4.png'
import man5 from '../images/man5.png'
import man6 from '../images/man6.png'

class HangMan extends PureComponent {
  static propTypes = {
    errors: PropTypes.number.isRequired,
  }

  renderMan() {
    const { errors } = this.props
    if(errors === 0) { return <img src={man0} alt="man0" /> }
    if(errors === 1) { return <img src={man1} alt="man1" /> }
    if(errors === 2) { return <img src={man2} alt="man2" /> }
    if(errors === 3) { return <img src={man3} alt="man3" /> }
    if(errors === 4) { return <img src={man4} alt="man4" /> }
    if(errors === 5) { return <img src={man5} alt="man5" /> }
    if(errors >= 6)  { return <img src={man6} alt="man6" /> }
  }

  render() {
    return (
      <div>
        { this.renderMan() }
      </div>
    )
  }
}

export default HangMan
