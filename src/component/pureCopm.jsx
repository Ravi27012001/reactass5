import React,{ PureComponent } from "react";
 
class PureComp extends PureComponent {
    constructor(){
        super();
        this.state = {
          name:"Ravikant",
        }
    }

    Update=()=>(this.setState(
        {name:"prasad"}
     ))

render(){
console.log("component Updated");
 
return(
    <>
    <h1>Name:{this.state.name}</h1>
    <button onClick={this.Update}>click</button>
    <h2>You will get component Update on console ,only once because component is changing only once.</h2>
     
    </>
)
}
}

export default PureComp;
