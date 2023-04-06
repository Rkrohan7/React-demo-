import { useNavigate } from "react-router-dom"

function Home(){

    const message="Routing Example!!!"

    const user={
        name:"John",
        city:"Pune"
    }

    const navigate=useNavigate()

    const gotoAbout=()=>{
        navigate(`/about/${message}`)
    }

    const sendObj=()=>{
        navigate(`/services`,{state:user})
    }

    return(
        <div>
            <h1>Home Component!!!</h1>
            <p>This is Home Component!!!</p>
            <button type="button" onClick={gotoAbout}>Go to About</button>
            <button type="button" onClick={sendObj}>Send Obj</button>
        </div>
    )
}

export default Home