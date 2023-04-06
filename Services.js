import { useLocation } from "react-router-dom"

function Services(){

    const location=useLocation()
   // console.log(location.state.name);

    return(
        <div>
            <h1>Services Component!!!</h1>
            <p>This is Services Component!!!</p>
            {location.state ? <p>Name : {location.state.name}</p>:""}
        </div>
    )
}

export default Services