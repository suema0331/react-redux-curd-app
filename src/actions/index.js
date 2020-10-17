import axios from   'axios'
export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING ='?token=token123'


export const readEvents = ()=> async dispatch => {
        const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
        dispatch({type:　READ_EVENTS,response}) //関数の中でdeispatchを実行可能
}

//postEventをつかってreducerに対する状態の更新を促す
//postEventで受け取るのはtitle,body 受け取ったらaxiosで送信
export const postEvent = values => async dispatch => {
        const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`,values)
        dispatch({type:　CREATE_EVENT,response}) //関数の中でdeispatchを実行可能
}
