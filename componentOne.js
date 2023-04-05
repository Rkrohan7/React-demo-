import React from 'react'

class componentOne extends React.Component{

    componentWillUnmount(){
        console.log('Component One unmounted!!!');
    }

    render(){
        return(
            <div>
                <h2>Child ComponentOne!!!</h2>
                <p>This is Child Component One</p>
            </div>
        )
    }
}

export default componentOne