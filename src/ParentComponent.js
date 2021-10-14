import React,{useCallback, useState} from "react";
import Count from "./Count";
// import Title from './Title';
import Button from './Button';

const ParentComponent=()=>{
    const [age, setAge] = useState(20);
    const [salary, setSalary] = useState(15000);

    const incrementAge= useCallback(
        () => {
            setAge(age+1);
        },
        [age],
    )


    const incrementSalary=()=>{
        setSalary(salary+1000);
    }

    return(
        <div>
            <Count text={"age"} count={age} />
            <Button handleClick={incrementAge} children={"increaseAge"} />
            <Count text={"salary"} count={salary} />
            <Button handleClick={incrementSalary} children={"increaseSalary"} />
        </div>
    )
}
export default ParentComponent;