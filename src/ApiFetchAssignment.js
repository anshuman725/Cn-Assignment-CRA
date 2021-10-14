import React from "react";
import { useState,useCallback,useEffect } from "react";


const ApiFetchAssignment=()=>{
    const [data, setData] = useState([]);
    const [loaded,setLoaded]=useState(true);
    // useCallback(
    //     () => {
    //       fetch('https://jsonplaceholder.typicode.com/photos')
    //       .then(res=>res.json())
    //       .then(data=>{
    //           setData(data)
    //           setLoaded(false)
    //       })

    //     },
    //     [],
    // )
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
              .then(res=>res.json())
              .then(data=>{
                  setData(data)
                  setLoaded(false)
              })
        
    },[])
    console.log(data)
    return(
        
        loaded?
        <div><h1>Loading...</h1></div>
        
        :<div>
        {
            data.map(data=>(
                <li key={data.id} >
                    <h1>{data.id}</h1>
                    <h1>{data.title}</h1>
                    <img src={data.url} alt="img" />
                </li>
            ))
        }
        </div>
    )
}

export default ApiFetchAssignment;