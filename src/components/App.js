import React, {Component} from 'react';
import { connect, connnect } from 'react-redux'

import { increment, decrement } from '../actions'

//constructorメソッド:componentの初期化時に行うcallback
//この中で状態を初期化しcounterの値を0にしていたがreduxではreducerで行う
// ->this.stateは不要

//Action　createrで実行するのでhandlePlusButton、handleMinusButtonも不要
class App extends Component {
 render (){
  const props = this.props
  return( 
  <React.Fragment>　 
     <div>value: { props.value }</div>
     <button onClick={ props.increment }>+1</button>  
     <button onClick={ props.decrement }>-1</button>  
  </React.Fragment>
  )
}
}

//mapStateToProps
//state情報からcomponentに必要なものを取り出してcomponent内のpropsとしてmappingする機能を持つ

const mapStateToProps  = state => ( {value: state.count.value} )

//mapDispatchToProps
//あるactionが起こった時にreducerにtypeに応じた状態遷移を実行させる関数

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
} )

//　ショートハンドでかくこともできる
// const mapDispatchToProps = ({increment,decrement})

export default connect (mapStateToProps, mapDispatchToProps)(App)
