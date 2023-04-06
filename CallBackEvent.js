import React from 'react'

function CallBackEvent(){

    const[message,setMessage]=React.useState('')

    const handleInput=(event)=>{
        setMessage(event.target.value)
    }

    return(
        <div>
            <h1>Call Back Event Demo!!!</h1>
            <p>Message is : {message}</p>
            <CheckCallBack handleOnChange={handleInput}/>
        </div>
    )
}

function CheckCallBack(props){

    return(
        <div>
            <input type='text' onChange={props.handleOnChange}/>
        </div>
    )
}

export default CallBackEvent