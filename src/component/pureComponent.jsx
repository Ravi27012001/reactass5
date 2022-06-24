import React from "react";
import  EnhancedClickCounter from './counterComponent'
import RightClickCounter from './rightClickCounter';
import EnhancedMouseOverCounter from './mouseover';
import PureComp from "./pureCopm";
const PureComponent=()=>{
    return(<>
    <h3 style={{backgroundColor:"red"}}>High Order Component.<br></br>
        <ul>
       <li>HOC Stands for High Order Components.</li>
       <li>A higher-order component is a function that takes a component and returns a new component.</li>
       <li> HOC helps us to adding a new function to each componenets we need,here we need not to write same code again and again like function in js. here we use a component again and again </li>
       <li>Higher-order components or HOC is the advanced method of reusing the component functionality logic. It simply takes the original component and returns the enhanced component.</li>
       <li> <u>Example of HOC</u></li>
       <EnhancedClickCounter/>
      <RightClickCounter/>
      <EnhancedMouseOverCounter/>
        </ul>
    </h3>

    <h3 style={{backgroundColor:"yellow"}}>PURE COMPONENTS
<ul>
    <li> ReactJS has provided us a Pure Component. If we extend a class with Pure Component, there is no need for shouldComponentUpdate() Lifecycle Method.</li>
    <li> ReactJS Pure Component Class compares current state and props with new props and states to decide whether the React component should re-render itself or  Not.</li>
    <li>In simple words, If the previous value of state or props and the new value of state or props is the same, the component will not re-render itself</li>
    <li>Since Pure Components restricts the re-rendering when there is no use of re-rendering of the component. Pure Components are Class Components which extends React.PureComponent. </li>
</ul>
<PureComp/>
    </h3>
    </>)
};
export default PureComponent;