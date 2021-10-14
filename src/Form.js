import React,{useState} from "react";

function Form(){
    const [text, setText] = useState("")
    return(
        <div className="Form">
            <form>
                <label>Name:</label>&nbsp;
                <input type="text" id="fname" value={text} onChange={e=>setText(e.target.value)} />
                
            </form>
            {/* <h3>{setVal((e)=>e.target.value)}</h3> */}
            <h3>{text}</h3>
            
            
        </div>
    )
}

export default Form;