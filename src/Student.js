import React from "react";

class Student extends React.Component{
    constructor(){
        super();
        this.state={
            name:""
        }

       
    }
    inputChange=(e)=>{
        this.setState({
            name:e.target.value
        });
    }
    render(){
        const {name}=this.state;
        return(
            <div>
                <input type="text" value={name} onChange={this.inputChange}  />
                <h3 style={{color:"white"}}>{name}</h3>
            </div>
        )
    }
}

export default Student;