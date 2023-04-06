import { useParams } from "react-router-dom"

function About(){

    const {message}=useParams()

    return(
        <div>
            <h1>About Component!!!</h1>
            <p>This is About Component!!!</p>
            <p>Message : {message}</p>
        </div>
    )
}

export default About