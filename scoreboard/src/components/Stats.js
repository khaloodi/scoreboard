import React from 'react'
// import PropTypes from 'prop-types'
import { Consumer } from './Context'

const Stats = () => {
  return (
    <Consumer>
      { context => { //equal to the value prop of the provider
        const totalPlayers = context.players.length
        const totalPoints = context.players.reduce( (total, players) => {
          return total + players.score
        }, 0)
        return (
          <table className="stats">
            <tbody>
              <tr>
                <td>Players:</td>
                <td>{totalPlayers}</td>
              </tr>
              <tr>
                <td>Total Points:</td>
                <td>{totalPoints}</td>
              </tr>
            </tbody>
          </table>
        )
      }}
    </Consumer>
  )
}

// Stats.propTypes = {
//   players: PropTypes.arrayOf(PropTypes.shape({
//     score: PropTypes.number //more specific than object
//   }))
// }

export default Stats