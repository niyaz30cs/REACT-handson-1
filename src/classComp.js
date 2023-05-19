import { Component} from "react";

class ClassComp extends Component{
    render(){
        return(
            <div className="right">
            <h1>This is created using class Component</h1>
            <p>This is done using external CSS</p>
            <p id="p2">This is done using inline CSS</p> 
            </div>
        )
    }
}
export default ClassComp