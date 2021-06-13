import React, { Component } from 'react'

class AddPlayerForm extends Component {

  // state = {
  //   value: ''
  // }

  // using refs, the DOM doesn't update after every keystroke
  playerInput = React.createRef()

  // handleValueChange = (e) => {
  //   this.setState({value: e.target.value})
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    // this.props.addPlayer(this.state.value)
    this.props.addPlayer(this.playerInput.current.value)
    // this.setState({value: ''})
    e.currentTarget.reset() //resets form submission after submit, added this b/c using refs instead of state
  }

  render() {
    // console.log(this.state.value)
    console.log(this.playerInput)
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          ref = {this.playerInput}
          // value={this.state.value}
          // onChange={this.handleValueChange}
          placeholder="Enter a player's name"
        />
        <input 
          type="submit" 
          value="Add Player"
        />
      </form>
    )
  }
}

export default AddPlayerForm

/*

as a functional component:

const AddPlayerForm = ({ addPlayer }) => {

  let playerInput = React.createRef();
  let handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(playerInput.current.value);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        ref={playerInput}
        placeholder="Enter a player's name"
      />

      <input 
        type="submit" 
        value="Add Player" 
      />
    </form>
  ); 
}

*/