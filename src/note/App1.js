import { render } from '@testing-library/react';
// import React, { Component } from 'react';
import React from 'react';
//関数componentでは{Component}いらない

//2 Functional component
//returnでJSXを返している
const App = () =>{
  return (
  <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>
  )
}

const Cat = () =>{
  return <div>Meow!</div>
}
export default App;

//1 AppをClass Componentという
// class App extends Component{
//   render() {
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am clicked.")}}/>
//       </React.Fragment>
//   )
// }
//export default App;
