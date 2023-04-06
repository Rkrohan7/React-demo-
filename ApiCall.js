import axios from 'axios'
import React,{ useEffect } from 'react'

function ApiCall(){

    const[users,setUsers]=React.useState([])
    const[posts,setPosts]=React.useState([])

    const[postInfo,setPostInfo]=React.useState()
    const[selectedIndex,setSelectedIndex]=React.useState(null)

    const post={
        userId:10,
        title:"Demo",
        body:"Testing!!!"
    }

    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then(response=>response.data)
    //     .then(res=>{
    //         setUsers(res)
    //     })
    // },[])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.data)
        .then(res=>{
            setPosts(res)
        })
    },[])

    const postData=()=>{
        axios.post("https://jsonplaceholder.typicode.com/posts",post)
        .then(response=>response.data)
        .then(res=>{
            console.log(res);
        }) 
    }

    // const getSinglePost=()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/posts/1")
    //     .then(response=>response.data)
    //     .then(res=>{
    //         console.log(res);
    //     })
    // }

    const viewMore=(postId,index)=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response=>response.data)
        .then(res=>{
            console.log(res);
            setSelectedIndex(index)
            setPostInfo(res)
        })
    }
    return(
        <div>
            <h1>Axios</h1>
            <ul>
                {
                    posts.map((post,index)=>(
                       <div>
                         <li>{post.title}</li>
                         <button onClick={()=>viewMore(post.id,index)}>View</button>
                         {selectedIndex===index ? (postInfo ? <p>Title : {postInfo.title} Body: {postInfo.body}</p> : "") : "" }
                       </div> 
                    ))
                }
            </ul>
        <button type='button' onClick={postData}>Submit</button>
        {/* <button type='button' onClick={getSinglePost}>Get Post</button> */}
       
        </div>
    )
}

export default ApiCall 