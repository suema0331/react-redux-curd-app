import _ from 'lodash'
import { READ_EVENTS } from '../actions'

//read_events時に状態をupdateしApp内部で管理したい
export default (events = {}, action) => {
　switch(action.type){
    case READ_EVENTS:
        // console.log(action.response.data)  //こっちは配列構造　__proto__: Array(0)        
        //idで抽出したものを再配置　各要素のobjectのidのvalueをkeyに持つobjectの塊
        // console.log(_.mapKeys(action.response.data,'id')) 　//objectになっている　__proto__: Object
        return _.mapKeys(action.response.data,'id')
    default:
        return events
  }   
}