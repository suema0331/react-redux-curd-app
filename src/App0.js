import { render } from '@testing-library/react';
import React, { Component } from 'react';
//JSXを使うにはimport React, { Component } from 'react';必要
//これをかくとReact.createElement(に変換することができる
//{}のなかに普通にJSをかける


function App () {
  // return <div>Hello, world!</div>;
  // return <h1>Hello, world!</h1>
  // divのところがJSX Javasqript XML reactを用いてXMLを出力するためのもの
  // transpailでJSに変換される(暗黙的にbabbleが変換してる)
  //　直感的に理解しやすい！

  //const dom = <h1>Hi!</h1>; // h1タグがトランスパイルされてdomという変数に代入される
  // const greeting = "Hi, Tom!";
  // const dom = <h1 className="foo">{greeting}</h1>; // h1タグがトランスパイルされてdomという変数に代入される
  // return dom;
  //Jsxではclass属性の指定はclass=""ではなくclassName
  //画面上でclass=2foo"に変換される
  
  // return <input type="text" onClick={() => {console.log("I am clicked.")}}/>;
  // return <input type="text" onChange={() => {console.log("I am clicked.")}}/>;
  // onChange= formのなかが変化するとI am clicked表示される
  
  return(
    <div>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked.")}}/>
    </div>
  )
}
//htmlの予約語forは使えない。この書き方でbarの部分のforが指定できる
//reactのreturnで返すタグは一個でないといけないので<div>で囲っている
//reactのための意図せぬタグが増える-><div>ではなく<React.Fragment>とかくと
//最終的に画面に表示されるhTMLに余計なtag出力されない

//https://softbanknew.udemy.com/course/react-application-development/learn/lecture/9624300#questions
//このページで左にJSXかくと、babbleによって自動でトランスパオルされて右にJSが表示される
// 他にもnodeでは認識されるes6の const foo = <div>
// を標準的なvar foo = React.createElement()に変換してくれる。




// Javasqriptを用いた場合ならこんなに書かないといけない
// class App extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Hello, world!!"
//     );
//   }
// }



export default App;
