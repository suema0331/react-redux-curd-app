import React, {Component} from 'react';
import { connect } from 'react-redux'
import { readEvents } from '../actions'
import _ from 'lodash'

class EventsIndex extends Component {
  //componentが呼ばれる時に実行される
  componentDidMount(){
    // console.log("hi!")
    //外部AIPサーバからデータ取得(Actionに定義)
    this.props.readEvents()
  }
//Application内部で使いやすいように整形
renderEvents(){
  return _.map(this.props.events, event=>(
     <tr key={event.id}>
       <td>{event.id}</td>
       <td>{event.title}</td>
       <td>{event.body}</td>
     </tr>
  ))
}

 render (){
  return( 
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {this.renderEvents()}
      </tbody>
    </table>
  // <React.Fragment>
  //　　2回出力されて、1回目は空白、2回目に取得したイベントが入っている　 
  //    <div> { console.log(props.events) }</div> 
  // </React.Fragment>
  )
}
}

//mapStateToProps
//state情報からcomponentに必要なものを取り出してcomponent内のpropsとしてmappingする機能を持つ

//enentsをキーにしてstate.events取得
const mapStateToProps  = state => ( {events: state.events} )

//mapDispatchToProps
//あるactionが起こった時にreducerにtypeに応じた状態遷移を実行させる関数

const mapDispatchToProps = ({ readEvents })

//　ショートハンドでかくこともできる
// const mapDispatchToProps = ({increment,decrement})

export default connect (mapStateToProps, mapDispatchToProps)(EventsIndex)
