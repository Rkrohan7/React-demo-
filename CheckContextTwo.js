import React,{useContext} from 'react'
import { MyContext } from './ContextDemo'
function CheckContextTwo(){

    const {value,setValue}=useContext(MyContext)

    const handleChange=()=>{
        setValue(value*2)
    }


    return(
        <div>
            <h2>Context Two</h2>
            <p>Value2 is multiple : {value}</p>
            <button type="button" onClick={handleChange}>Change</button>
        </div>
    )
}


export default CheckContextTwo