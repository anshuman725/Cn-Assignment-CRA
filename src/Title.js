import React from "react";

const Title=({text,count})=>{
    console.log("rendering");
    return(
        <div>
            {text}-{count};
        </div>
    )
}

export default Title;