import React, { Component } from 'react'
import { Provider } from './Context' // named import, don't need to provide index.js b/c node looks for it automatically
import Header from './Header'
import Player from './Player'
import AddPlayerForm from './AddPlayerForm'

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  // player id counter
  prevPlayerId = 4

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
    // console.log('index: ' + index, 'delta: ' + delta)
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleAddPlayer = (name) => {
    this.setState(prevState => {
       return {
         players: [
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: this.prevPlayerId += 1,
          }
        ]
      }
    })
  }

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } 
    return null;
  }

  render() {

    const highScore = this.getHighScore() // Call the getHighScore function in the App component's render() method, and assign it to the variable highScore

    return (
      <Provider value={{
        players: this.state.players,
        actions: {
          changeScore: this.handleScoreChange,
          removePlayer: this.handleRemovePlayer,
          addPlayer: this.handleAddPlayer
        }
      }}>
        <div className="scoreboard">
          {/* <Header 
            // title="Scoreboard" - included in default prop types
            players={this.state.players} 
          /> */}
          <Header />
    
          {/* Players list */}
          {this.state.players.map( (player, index) =>
            <Player 
              name={player.name}
              score={player.score}
              id={player.id}
              key={player.id.toString()} 
              index={index}
              // scoreChange={this.handleScoreChange}
              isHighScore={highScore === player.score} //expression that returns true if a player's score is equal to the high score, and false if it's not
              // removePlayer={this.handleRemovePlayer}           
            />
          )}

          <AddPlayerForm 
            // addPlayer={this.handleAddPlayer}
          />
        </div>
      </Provider>
    );
  }
}

export default App;
