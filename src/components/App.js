import React, {Component} from 'react';

// AppがCounter componentを呼ぶ
// このCounter component内でclass componentを作成
const App = () => ( <Counter></Counter> )

//component内でStateを使う
//ComponentはComponentを継承することで作成可能
//一行目でインポートしておくこと

class Counter extends Component {
 constructor(props){    //初期化処理で実行されるメソッド
  super(props)　　　　　　//親クラスで初期化処理を行う
  console.log(this.state) 
  this.state={count:0}　//オブジェクトがstateに設定される
 }

  handlePlusButton = () => { //handlePlusButtonメソッドの中でstateの値を+1する
    console.log("handlePlusButton")
    console.log(this.state.count) //stateの状態をみる
    this.setState({count: this.state.count +1 })//状態を変更するメソッド
    //this.state = {count: this.state.count +1 } //直接初期化したstateを変更してはいけない
    //状態を変えたい＋DOMを更新したい
　  //→setStateをしたら自動で状態を変えた時にrenderが実行される
}

handleMinusButton = () => {
  this.setState({count: this.state.count -1 })
}

 render (){　//render関数を呼んでreturnのなかでcounder文字列を返す
  console.log(this.state)
  return( //returnするjSXの親は一個でないといけないので<React.Fragment>
  <React.Fragment>　 
     <div>count: {this.state.count }</div>
     <button onClick={this.handlePlusButton}>+1</button>  
     <button onClick={this.handleMinusButton}>-1</button>  
  </React.Fragment>
  )
}
}

export default App;
