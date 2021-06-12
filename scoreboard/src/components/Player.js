import React from 'react'
import Counter from './Counter'

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
        { props.name }
      </span>

      <Counter 
        score={props.score}
        index={props.index}
        changeScore={props.scoreChange}
      />
    </div>
  );
}

export default Player