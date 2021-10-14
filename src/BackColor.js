import React from "react"

const BackColor=(props)=>{
    return(
        <div style={{backgroundColor:props.color}} >{props.name}</div>
    )
}

export default BackColor;
