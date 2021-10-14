import React from "react";
import './App.css';
 function Button({handleClick,children}){
     return(
         <div className="Button">
                <button onClick={handleClick}>
                    {children}
                </button>
         </div>
     )
 }

 export default Button;