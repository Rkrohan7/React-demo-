import React,{useMemo} from 'react'

function UseMemoDemo(){

    const users=[{
        id:1,
        name:"John",
        city:"Pune"
    },{
        id:2,
        name:"Peter",
        city:"Bangalore"
    }]

    const[text,setText]=React.useState('')
    const[search,setSearch]=React.useState('')

    const handleInput=(event)=>{
        setText(event.target.value)
    }

    const handleSearch=()=>{
        setSearch(text)
    }

    //useMemo
    const filteredData=useMemo(()=> users.filter((user)=>{
        console.log('hiiiiiiii');
        return user.name.includes(search)
    }),[search])

    return(
        <div>
            <h1>Use Memo</h1>
            <input type='text' onChange={handleInput}/>
            <button type="button" onClick={handleSearch}>Search</button>
            <Check userList={filteredData}/>
        </div>
    )
}

function Check({userList}){

    return(
        <ul>
            {userList.map((user)=>(
                <li>{user.name}</li>
            ))}
        </ul>
    )
}

export default UseMemoDemo