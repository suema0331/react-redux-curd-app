import { INCREMENT , DECREMENT } from '../actions'

// 初期状態のobjectのstateを入れる
const initialState = {value:0}

// reducerは関数として定義
//関数の内部で受け取ったactionのtypeに応じてstateを変更する
//actionの2つのtypeによってswitch
export default (staet = initialState ,action) => {
　switch(action.type){
    case INCREMENT:
        return { value: state.value + 1 }  
    case DECREMENT:
        return { value: state.value - 1 }
    default:
        return state
  }   
} 