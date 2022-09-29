import React , {useState} from 'react'
import axios from 'axios'
// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at
const url = 'http://localhost:9000/api/result'

export default function AppFunctional(props) {

const [state, setState] = useState({
    
  totalMoves:0,
  coordinateX: 2,
  coordinateY: 2,
  initialIndex: 4,
  message:'',
  email: initialEmail

})

const reset = () => {
  // Use this helper to reset all states to their initial values.
  setState({...state, totalMoves: 0, coordinateX: 2, coordinateY:2, initialIndex: 4, totalMoves: 0, email: initialEmail, message:''})
}

getNextIndex = (direction) => {
  // This helper takes a direction ("left", "up", etc) and calculates what the next index
  // of the "B" would be. If the move is impossible because we are at the edge of the grid,
  // this helper should return the current index unchanged.

}

const resetMessage = () => {
  setState({...state, message: ''})
}


const moveX = (evt) => {
  // This event handler can use the helper above to obtain a new index for the "B",
  // and change any states accordingly.
  //let newMessage = ''
  if(state.coordinateX > 2 ) {
   const newMessage = state.coordinateX > 2 ? "You can't go right" : 'newMessage'
    return setState({...state, message: newMessage })
    
  }
  
  
  const newX = state.coordinateX + 1
  const newIdx = state.initialIndex + 1
  const newMovesx = state.totalMoves + 1
  setState({...state, coordinateX: newX, initialIndex: newIdx, totalMoves: newMovesx})
}

const moveXleft = (evt) => {
  let newMessage = ''
   //newMessage = state.coordinateX < 2 ? "you cant go left" : ''
  if(state.coordinateX < 2 ) {
    newMessage = state.coordinateX < 2 ? "You can't go left" : ''
    console.log(newMessage)
    return setState({...state, message:  newMessage   })
  }
  
  const newX = state.coordinateX - 1
  const newIdx = state.initialIndex - 1
  const newMovesx = state.totalMoves + 1
  setState({...state, coordinateX: newX, initialIndex: newIdx, totalMoves: newMovesx })
}

const moveY = (evt) => {
  if(state.coordinateY < 2 ) {
    return setState({...state, message: "You can't go up"})
 }
  const newY = state.coordinateY - 1
  const newIdx = state.initialIndex - 3
  const newMovesY = state.totalMoves + 1
  setState({...state, coordinateY: newY, initialIndex: newIdx, totalMoves: newMovesY})
}

const moveYdown = (evt) => {
  if(state.coordinateY > 2 ) {
    return setState({...state, message: "You can't go down"})
  }
  const newY = state.coordinateY + 1
  const newIdx = state.initialIndex + 3
  const newMovesY = state.totalMoves + 1
  setState({...state, coordinateY: newY, initialIndex: newIdx, totalMoves: newMovesY })
}


const onChange = (evt) => {
  // You will need this to update the value of the input.
  const {value} = evt.target
  setState({...state, email: value})
  console.log(value)
}

const onSubmit = (evt) => {
  console.log('submitting')
  evt.preventDefault()
  let message 
  // Use a POST request to send a payload to the server.
  axios.post(url, { "x": state.coordinateX, "y": state.coordinateY, "steps": state.totalMoves, "email": state.email })
    .then(res => {
      message = res.data.message
    })
    .catch(err => {
      message =  err.response.data.message
    })

    .finally(() => {
        reset();
        setState({...state, message, email:initialEmail})
    })

    
}

  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.

  function getXY() {
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
  }

  function getXYMessage() {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
  }

  

  function getNextIndex(direction) {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
  }

  function move(evt) {
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
  }
  
  

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
          <h3 id="coordinates">{`Coordinates (${state.coordinateX}, ${state.coordinateY})`}</h3>
          <h3 id="steps">{state.totalMoves === 1 ? `You moved ${state.totalMoves} time` : `You moved ${state.totalMoves} times`}</h3>
        </div>
        <div id="grid">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
              <div key={idx} className={`square${idx === state.initialIndex ? ' active' : ''}`}>
                {idx === state.initialIndex ? 'B' : null}
              </div>
            ))
          }
        </div>
        <div className="info">
          <h3 id="message">{state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={moveXleft}>LEFT</button>
          <button id="up" onClick={moveY}>UP</button>
          <button id="right" onClick={moveX}>RIGHT</button>
          <button id="down"onClick={moveYdown} >DOWN</button>
          <button id="reset" onClick={reset}>reset</button>
        </div>
        <form onSubmit={onSubmit}>
          <input id="email" value={state.email} onChange={onChange} type="email" placeholder="type email"></input>
          <input id="submit" type="submit" ></input>
        </form>
    </div>
  )
}
