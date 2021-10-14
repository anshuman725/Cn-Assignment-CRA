import React from 'react';


class ApiFetch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            item:[],
            isLoaded:false
        }
    };
        componentDidMount(){
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.json())
            .then(result=>{
                this.setState({
                    isLoaded:true,
                    item:result
                });
            
            })
            


        
    };
    render(){
        const {item,isLoaded}=this.state;

        return !isLoaded ? <div>Loading...</div> : <div>
            {item.map(item =>(
                <li key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </li>
            ))}
        </div>;
    }
}

export default ApiFetch;
