import React, { PureComponent } from 'react'
import Counter from './Counter'

class Player extends PureComponent {
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