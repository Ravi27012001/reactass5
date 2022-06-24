import React from "react";
import { useState } from "react";
const CounterHoc=(Component , value)=>{

const UpgradedComponent=()=>{    
     const[counter,SetCounter] = useState(0);
     const handleIncrement=()=> SetCounter(counter+value);

     return <Component counter={counter} handleIncrement={handleIncrement}/>
}
return(
     UpgradedComponent
)
}

export default CounterHoc;