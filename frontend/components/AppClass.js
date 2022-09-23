import React from 'react'

// Suggested initial states
/*const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at

  const initialState = {
  message: initialMessage,
  email: initialEmail,
  index: initialIndex,
  steps: initialSteps,
}*/

export default class AppClass extends React.Component {
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.
  state = {
    
    totalMoves:0,
    coordinateX: 2,
    coordinateY: 2,
    initialIndex: 4

  }

  getXY = () => {
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
  }

  getXYMessage = () => {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
  }

  reset = () => {
    // Use this helper to reset all states to their initial values.
    this.setState({...this.state, totalMoves: 0, coordinateX: 2, coordinateY:2, initialIndex: 4, totalMoves: 0})
  }

  getNextIndex = (direction) => {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.

  }
  

  moveX = (evt) => {
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
    const newX = this.state.coordinateX + 1
    const newIdx = this.state.initialIndex + 1
    const newMovesx = this.state.totalMoves + 1
    this.setState({...this.state, coordinateX: newX, initialIndex: newIdx, totalMoves: newMovesx})
  }

  moveXleft = (evt) => {
    const newX = this.state.coordinateX - 1
    const newIdx = this.state.initialIndex - 1
    const newMovesx = this.state.totalMoves + 1
    this.setState({...this.state, coordinateX: newX, initialIndex: newIdx, totalMoves: newMovesx })
  }

  moveY = (evt) => {
    const newY = this.state.coordinateY + 1
    const newIdx = this.state.initialIndex - 3
    const newMovesY = this.state.totalMoves + 1
    this.setState({...this.state, coordinateY: newY, initialIndex: newIdx, totalMoves: newMovesY})
  }

  moveYdown = (evt) => {
    const newY = this.state.coordinateY - 1
    const newIdx = this.state.initialIndex + 3
    const newMovesY = this.state.totalMoves + 1
    this.setState({...this.state, coordinateY: newY, initialIndex: newIdx, totalMoves: newMovesY})
  }
  

  onChange = (evt) => {
    // You will need this to update the value of the input.
  }

  onSubmit = (evt) => {
    // Use a POST request to send a payload to the server.
  }

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">{`Coordinates ${this.state.coordinateX}, ${this.state.coordinateY}`}</h3>
          <h3 id="steps">{`You moved ${this.state.totalMoves} times`}</h3>
        </div>
        <div id="grid">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
              <div key={idx} className={`square${idx === this.state.initialIndex ? ' active' : ''}`}>
                {idx === this.state.initialIndex ? 'B' : null}
              </div>
            ))
          }
        </div>
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={this.moveXleft}>LEFT</button>
          <button id="up" onClick={this.moveY}>UP</button>
          <button id="right" onClick={this.moveX}>RIGHT</button>
          <button id="down"onClick={this.moveYdown} >DOWN</button>
          <button id="reset" onClick={this.reset}>reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
