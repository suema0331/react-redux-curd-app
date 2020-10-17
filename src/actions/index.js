import axios from   'axios'
export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING ='?token=token123'

//外部APIサーバにリクエストを投げる：非同期処理の実装
//readeventsはpureなobjectを返す必要（この中に非同期処理実装は許されない）
//→redux createrはredux-thunkでactionのかわりに関数を返すことができる
//src/index.jsの'redux-thunk' はミドルウェアに該当。→appliMiddlewareもimport

//axiousは非同期処理、戻り値がpromiseなのでasync await
//バッククオートにしないとURLにアクセスできないので注意！
export const readEvents = ()=> async dispatch => {
        const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
        console.log(response) //status: 200が返ってくること
        dispatch({type:　READ_EVENTS,response}) //関数の中でdeispatchを実行可能
}
