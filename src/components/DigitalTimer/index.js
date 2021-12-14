import {Component} from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

class DigitalTimer extends Component {
  state = {limit: 25, status: false, minutes: 25, seconds: '00'}

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  onPlus = () => {
    const {status} = this.state
    if (status === false) {
      this.setState(prevState => ({
        limit: prevState.limit + 1,
        minutes: prevState.minutes + 1,
      }))
    }
  }

  onMinus = () => {
    const {status} = this.state
    if (status === false) {
      this.setState(prevState => ({
        limit: prevState.limit - 1,
        minutes: prevState.minutes - 1,
      }))
    }
  }

  timer = () => {
    const {seconds} = this.state
    if (seconds === '00' || seconds === 0) {
      this.setState(prevState => ({
        seconds: 60,
        minutes: prevState.minutes - 1,
      }))
    }
    if (seconds !== '00' || seconds !== 0) {
      this.setState(prevState => ({
        seconds: prevState.seconds - 1,
      }))
    }
  }

  onReset = () => {
    const {limit} = this.state
    this.setState({seconds: 60, minutes: limit})
    clearInterval(this.myInterval)
  }

  onPlay = () => {
    this.myInterval = setInterval(this.timer, 1000)
    this.setState({status: true})
  }

  onPause = () => {
    clearInterval(this.myInterval)
    this.setState({status: false})
  }

  render() {
    const {limit, status, minutes, seconds} = this.state
    return (
      <div>
        <h1>Digital Timer</h1>
        <div>
          <h1>
            {minutes}:{seconds}
          </h1>
          {status ? <p>Running</p> : <p>Paused</p>}
        </div>
        <div>
          {status ? (
            <div>
              <button type="button" onClick={this.onPause}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                  alt="pause icon"
                />
                Pause
              </button>
            </div>
          ) : (
            <div>
              <button type="button" onClick={this.onPlay}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  alt="play icon"
                />
                Start
              </button>
            </div>
          )}

          <button type="button" onClick={this.onReset}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
              alt="reset icon"
            />
            Reset
          </button>
        </div>
        <div>
          <p>Set Timer limit</p>
          <button type="button" onClick={this.onMinus}>
            <AiOutlineMinus />
          </button>

          <p>{limit}</p>
          <button type="button" onClick={this.onPlus}>
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
