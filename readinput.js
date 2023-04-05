import React from "react";
import ClassDemo from "./ClassDemo";
import Display from "./dispaly";
import PropsDemo from "./PropsDemo";
function ReadInput() {
    // let Message=""
    const [message, setMessage] = React.useState('');
    const [display, setDisplay] = React.useState('')
    const ReadInput = (event) => {
        setMessage(event.target.value)


    }
    const displayValue = () => {
        setDisplay(message);
        
    }
    return (
        <div>

            <input type='text' onChange={ReadInput} />
            <button type='button' onClick={displayValue}>Read</button>
            <p>Message:{message}</p>
            <p>display Message :  {display}</p>
            <Display/>
            <ClassDemo/>
            <PropsDemo/>
        </div>
    )
}
export default ReadInput;