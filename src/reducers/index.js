//App内の全reducerを結合する
import {combineReducers} from 'redux'
import events from './events'

export default combineReducers({events})
// export default combineReducers({foo,bar,baz}) combineしたいreducerを列挙する

