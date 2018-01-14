import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './WinLost.css';

export default class WinLost extends PureComponent {
  static propTypes = {
    win: PropTypes.bool,
    lost: PropTypes.bool,
  }

  isWinner(win, lost) {
    if(win)
    {
      return <p className="Win">{ "You Win" }</p>
    }
    if(lost)
    {
      return <p className="Lost">{ "You Lost" }</p>
    }
    return
  }

  render() {
    return (
      <div>
        { this.isWinner(this.props.win, this.props.lost) }
      </div>
    )
  }
}
