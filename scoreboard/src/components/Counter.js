import React from 'react'
import PropTypes from 'prop-types'
import { Consumer } from './Context'

const Counter = ({ index, score}) => {

  // let index = index

  return (
    <Consumer>
      {context => (
        <div className="counter">
          <button className="counter-action decrement" onClick={()=> context.actions.changeScore(index, -1)}> - </button>
          <span className="counter-score">{ score }</span>
          <button className="counter-action increment" onClick={()=> context.actions.changeScore(index, 1)}> + </button>
        </div>
      )}
    </Consumer>
  );
}

Counter.propTypes = { //contains the props being passed to the component as its keys
  index: PropTypes.number,
  score: PropTypes.number,
  // changeScore: PropTypes.func
}

export default Counter