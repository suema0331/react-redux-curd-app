import React, {Component} from 'react';
import { connect } from 'react-redux'
import { readEvents } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'

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
    <React.Fragment>
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

      <Link to="/events/new">New Event</Link>
    </React.Fragment>
  )
}
}

//enentsをキーにしてstate.events取得
const mapStateToProps  = state => ( {events: state.events} )

const mapDispatchToProps = ({ readEvents })

export default connect (mapStateToProps, mapDispatchToProps)(EventsIndex)
