import React from 'react'
import componentOne from './componentOne';
import componentTwo from './componentTwo';

class componentLifeCycle extends React.Component{

    constructor(){
        super()
        this.state={
            number:1    
            
        }
    }

    componentDidMount(){
        console.log('In Component Did Mount: '+this.state.number);
    }

    componentDidUpdate(){
        console.log('In Component Did Update: '+this.state.number);
    }


    increment=()=>{
        this.setState({number:this.state.number+1})
    }

    toggle=()=>{
        this.setState({number:this.state.number===0 ? 1 : 0})
    }

    render(){

        const component=this.state.number ? <componentOne/> : <componentTwo/>

        return(
            <div>
                <h1>Component Life Cycle Methods!!!</h1>
                <p>Number is: {this.state.number}</p>
                <button type='button' onClick={this.increment}>Add</button>
                <button type='button' onClick={this.toggle}>Toggle</button>
                {component}
            </div>
        )
    }
}

export default componentLifeCycle