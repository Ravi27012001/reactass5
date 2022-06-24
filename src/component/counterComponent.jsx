 import React from "react";
 
import CounterHoc from "./hoc";
 const ClickCounter=(props)=>{
    // const[counter,SetCounter]=useState(0);
    // const handleIncrement = () => SetCounter(counter +1)

    const {counter, handleIncrement}= props;
    return(<>
        <h1> now the count is {counter}</h1>
         <button onClick={handleIncrement}> click here for +5</button> 
    </>)

 }
 const EnhancedClickCounter = CounterHoc(ClickCounter,5)
 export default EnhancedClickCounter;
