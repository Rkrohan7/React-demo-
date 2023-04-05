import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function UseEffectExample() {
    const userInfo = {
        username: '',
        address: {
            city: ''
        }
    }

    const userData = {
        username: '',
        city: ''
    }

    const [userList, setUserList] = React.useState([])
    const [user, setUser] = React.useState(userData)
    const[edit,setEdit]=React.useState(false)
    const[editObj,setEditObj]=React.useState({});
    const[selectedIndex,setSelectedIndex]=React.useState()
    

    useEffect(() => {

        if (userList.length === 0) {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(res => {
                    console.log(res);
                    setUserList(res)
                })
        }
    }, [userList])



    const handleInput = event => {
        setUser({ ...user, [event.target.name]: event.target.value })
        if(edit){
            setEditObj({...editObj,[event.target.name]:event.target.value})
        }else{
            console.log('set to user');
            setUser({...user,[event.target.name]:event.target.value})
        }
    }

    const addData = () => {
        if(edit){
            let temp=[...userList]
            temp[selectedIndex]=editObj
            console.log(temp);
            setUserList(temp)
            document.getElementById("myform").reset()
        }else{
            console.log('222222');
            userObj.username=user.username
            userObj.email=user.email
            user.id=user.id+1
            setUserList([...userList,user])
            // setUser(userObj)
            document.getElementById("myform").reset()
        }     

        setUserList([...userList, userInfo])
        console.log(userList);
    }
    const editUser = (editUser, index) => {
     
        console.log(editUser);

    }
    const deleteUser = (editUser, index) => {
        console.log(userList.user.spice);
    }
    return (
        <div>
            <h1>User List!!!</h1>
            <form >
                <label>Username : </label>
                <input type='text' name="username" onChange={handleInput}  value={edit ? (editObj.username ? editObj.username : ""):(
                      user.username ? user.username :""
                  )}  />

                <label>City : </label>
                <input type='text' name="city" onChange={handleInput}  value={edit ? (editObj.city ? editObj.city : ""):(
                      user.email ? user.email :""
                  )}  />

                <button type="button" onClick={addData}>Add</button>
               

            </form>
            <div class="table-div">
                <table id="customers">
                    <thead>
                        <tr>

                            <th>Username</th>
                            <th>City</th>
                            <th>EditUser</th>
                            <th>DeleteUser</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        

                            {
                                userList.map((user) => (
                                    <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.address.city}</td>
                                    <td> <button type="button" onClick={() => editUser(user,)}>Edit</button></td>
                                    <td> <button type="button" onClick={() => deleteUser(user,)}>delete</button></td>
                                    </tr>
                                ))
                            }


                    </tbody>
                </table>



            </div>





        </div>
    )
}


export default UseEffectExample