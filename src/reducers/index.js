//App内の全reducerを結合する
import {combineReducers} from 'redux'
import {reducer as form } from 'redux-form' //redux-formを使うためにreduxの提供するreducerをformと定義
import events from './events'

export default combineReducers({events, form})
// export default combineReducers({foo,bar,baz}) combineしたいreducerを列挙する

