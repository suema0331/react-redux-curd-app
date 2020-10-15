//App内の全reducerを結合する
import {combineReducers} from 'redux'
import count from './count'

export default combineReducers({count})
// export default combineReducers({foo,bar,baz}) combineしたいreducerを列挙する

