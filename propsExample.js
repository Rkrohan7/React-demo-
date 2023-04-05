
import React from 'react'
function PropsExample(){

    // const[firstName,setFirstName]=React.useState('')

    // const handleFirstName=(event)=>{
    //     setFirstName(event.target.value)
    // }

    const userObj={
        firstName:'',
        lastName:'',
        city:''
    }

    const[user,setUser]=React.useState(userObj)
    const[userList,setUserList]=React.useState([])

    const handleChange=event=>{
        console.log(event.target);
        setUser({...user,[event.target.name]:event.target.value})
    }

    const addData=()=>{
        setUserList([...userList,user])
        document.getElementById("myform").reset()
    }

    return(
        <div>
            <form id="myform">
                <label>FirstName :</label>
                <input type='text' name="firstName" onChange={handleChange}/>

                <label>LastName :</label>
                <input type='text' name="lastName" onChange={handleChange}/>

                <label>City :</label>
                <input type='text' name="city" onChange={handleChange}/>

                <button type="button" onClick={addData}>Submit</button>
            </form>
            <UserList users={userList}/>
        </div>
    )
}

function UserList(props){

    return(
        <div>
            <h2>User List</h2>
            <table></table>
        <tr>
            {
                props.users.map((user)=>(
                    <li>{user.firstName+" "+user.lastName+" | "+user.city}</li>
                ))
            }
        </tr>
        </div>
    )
}

export default PropsExample