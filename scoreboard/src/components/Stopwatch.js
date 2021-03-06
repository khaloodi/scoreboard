import React, {Component} from 'react'

class Stopwatch extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0
  }

  componentDidMount() {
    console.log('The stopwatch mounted!')
    this.intervalID = setInterval(() => this.tick(), 100) // time delay of 100 = 1/10th of a second
  }

  componentWillUnmount() {
    clearInterval(this.intervalID) // this clears the timer in case we were to go to a different, otherwise timer would run indefinitely
  }

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now()
      this.setState(prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
      }))
    }
  }

  handleStopwatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }))

    // the timer only changes the time if timer is running or is true
    if(!this.state.isRunning) {
      this.setState({
        previousTime: Date.now()
      })
    }
  }

  handleReset = () => {
    this.setState({elapsedTime: 0})
  }

  render() {

    const seconds = Math.floor(this.state.elapsedTime/1000) 

    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{ seconds }</span>
        <button onClick={this.handleStopwatch}>
          { this.state.isRunning ? 'Stop' : 'Start' }
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

export default Stopwatch