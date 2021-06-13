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
  render() {

    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        <button onClick={this.handleStopwatch}>
          { this.state.isRunning ? 'Stop' : 'Start' }
        </button>
        <button>Reset</button>
      </div>
    )
  }
}

export default Stopwatch