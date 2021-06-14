import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter'
import Icon from './Icon'

class Player extends PureComponent {

  static propTypes = {
    // scoreChange: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string,
    id: PropTypes.number,
    score: PropTypes.number,
    index: PropTypes.number,
    isHighScore: PropTypes.bool
  }

  render() {
    console.log(this.props.name + 'rendered')
    const {
      name,
      id,
      score,
      index,
      removePlayer,
      // scoreChange
    } = this.props
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Icon isHighScore={this.props.isHighScore}/>
          { name }
        </span>
  
        <Counter 
          score={score}
          index={index}
          // changeScore={scoreChange}
        />
      </div>
    );
  }
}

export default Player