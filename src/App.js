// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { Component } from "react";
import "./App.css";
import FuncComp from "./functionComp";
import ClassComp from "./classComp";

class Class1 extends Component{
  constructor(){
    super();
    this.state={
      functionClick:false,
      classClick:false
    }
  }
  render(){
    return(
      <div className="App">
      <h1 className="head">Styling using Function and Class Component</h1>
      <div className="center">
        <button id="btn1" onClick={()=>this.setState({functionClick:!this.state.functionClick})}>To see styling in functional Component</button>
        <button  id="btn2"onClick={()=>this.setState({classClick:!this.state.classClick})}>To see styling in class Component</button>
        {this.state.functionClick && <FuncComp/>}
        {this.state.classClick && <ClassComp/>}
      </div>
      </div>
    )
  }

}

export default Class1
