import React from "react";
 
import CounterHoc from "./hoc";
 const RightClickCounter=(props)=>{
//    const[counter,SetCounter]=useState(0);
//    const increment =()=> SetCounter(counter+1);

const{counter,handleIncrement} = props;

   return(<>
    <h1>count is {counter} </h1>
    <button onContextMenu={handleIncrement}>right click here </button>
    </>
   )


 }
 const EnhancedRightClickCounter = CounterHoc(RightClickCounter,2)
 export default EnhancedRightClickCounter;
