import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter'

class Player extends PureComponent {

  static propTypes = {
    scoreChange: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string,
    id: PropTypes.number,
    score: PropTypes.number,
    index: PropTypes.number
  }

  render() {
    console.log(this.props.name + 'rendered')
    const {
      name,
      id,
      score,
      index,
      removePlayer,
      scoreChange
    } = this.props
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          { name }
        </span>
  
        <Counter 
          score={score}
          index={index}
          changeScore={scoreChange}
        />
      </div>
    );
  }
}

export default Player