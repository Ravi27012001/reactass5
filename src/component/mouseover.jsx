import React from "react";
 
import CounterHoc from "./hoc";
 const MouseOverCounter = (props)=>{
//    const[counter,SetCounter]=useState(0);
//    const increment =()=> SetCounter(counter+1);

const{counter,handleIncrement} = props;

   return(<>
    <h1 onMouseOver={handleIncrement}>Counter increase on Every MouseOver {counter} </h1>
     
    </>
   )


 }
 const EnhancedMouseOverCounter = CounterHoc(MouseOverCounter,2)
 export default EnhancedMouseOverCounter;