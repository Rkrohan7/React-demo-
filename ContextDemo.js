
import React,{ createContext,  } from "react"
import CheckContextOne from "./ChackContexOne"
import CheckContextTwo from "./CheckContextTwo"

export const MyContext=createContext()

function ContextDemo(){

    const[value,setValue]=React.useState(0)

    const handleChange=()=>{
        setValue(value+1)
    }

    return(
        <MyContext.Provider value={{value,setValue}}>
        <div>
            <h1>Context API</h1>
            <p>Value is Add: {value}</p>
            <button type="button" onClick={handleChange}>Change</button>
            <CheckContextOne/>
            <CheckContextTwo/>
        </div>
        </MyContext.Provider>
    )
}


 export default ContextDemo