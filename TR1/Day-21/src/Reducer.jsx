import React, { useReducer } from 'react'

function counterReducer(state,action){
    switch(action.type){
        case "increment":
            return {count : state.count + 1};
        case "decrement":
            return {count : state.count - 1};
        case "reset":
            return {count : 0}
        default:
            throw new Error("Unknown action type")
    }
}



const Reducer = () => {
    const initialState = { count : 0 }

    const [state , dispatch] = useReducer(counterReducer , initialState);
  return (
    <div>{state.count}
    <button onClick={()=>{dispatch({type : "increment"})}}>Inc</button>
    </div>
  )
}

export default Reducer