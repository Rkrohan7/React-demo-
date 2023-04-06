import React,{useContext} from 'react'
import { MyContext } from './ContextDemo'

function CheckContextOne(){

    const {value,setValue}=useContext(MyContext)

    const handleChange=()=>{
        setValue(value+1)
    }

    return(
        <div>
            <h2>Context One</h2>
            <p>Value1 is: {value}</p>
            <button type="button" onClick={handleChange}>Change</button>
        </div>

    )
}

export default CheckContextOne