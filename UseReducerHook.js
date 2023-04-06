import { useReducer } from "react"

const initialState={count:0}

const reducer=(state,action)=>{

    switch(action.type){
        case "increment":
            console.log('Payload is: '+action.payload);
            return {count:state.count+10}

        case "decrement":
            return {count:state.count-10}
        
        default:
            return new Error()    
    }
}

function UseReducerHook(){

    const[state,dispatch]=useReducer(reducer,initialState)

    return(
        <div>
            <h1>Use Reducer Hook!!!</h1>
            <p> Count is : {state.count}</p>
            <button type="button" onClick={()=>dispatch({type:"increment",payload:100})}>Increment</button>
            <button type="button" onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
        </div>
    )
}

export default UseReducerHook