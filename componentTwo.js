import React from 'react'

class componentTwo extends React.Component{

    componentWillUnmount(){
        console.log('component two unmounted!!!');
    }

    render(){
        return(
            <div>
                <h2>Child ComponentTwo!!!</h2>
                <p>This is Child Component Two</p>
            </div>
        )
    }
}

export default componentTwo