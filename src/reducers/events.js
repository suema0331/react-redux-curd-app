import _ from 'lodash'
import { 
    CREATE_EVENT,
    READ_EVENTS,
    READ_EVENT,
    DELETE_EVENT,
    UPDATE_EVENT,
} from '../actions'

//read_events時に状態をupdateしApp内部で管理したい
export default (events = {}, action) => {
　switch(action.type){
    case CREATE_EVENT:
    case READ_EVENT: //データの更新を行う
    case UPDATE_EVENT:
        const data = action.response.data
        // console.log(action.response.data)
        //{id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
        //手元にもっているeventsのデータ中に該当データがあった場合、APIサーバで取ってきた最新の情報で更新    
        return {...events,[data.id]:data}
    case READ_EVENTS:
        return _.mapKeys(action.response.data,'id')
    case DELETE_EVENT:
        //該当のidのenent情報をメモリから削除・objectを更新
        delete events[action.id]
        return {...events}
    default:
        return events
  }   
} 