import React, { Component } from 'react'
import {connect}  from 'react-redux'
import axios from 'axios'
import TxtDetails from './txtDetails'
import ReplyList from './replyList'

class index extends Component {

  componentDidMount () {
    this.getData(this.props.match.params.id)
  }

  // shouldComponentUpdate (nextProps,nextState) {
  //   // if ( nextProps !=) {

  //   // }
  // }

  getData (id) {
    this.props.dispatch((dispatch)=>{
      dispatch({
        type: 'DETAILS_UPDATA'
      })
      axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
        .then((res)=>{
          dispatch({
            type: 'DETAILS_UPDATA_SUCC',
            data: res.data
          })
        })
        .catch((error)=>{
          dispatch({
            type: 'DETAILS_UPDATA_ERROR'
          })
        })
    })
  }

  render() {
    console.log(this.props)
    let {loading,data} = this.props
    return (
      <div className='wrap'>
          <TxtDetails 
              loading={loading}
              data={data}
          />
          <ReplyList 
              loading={loading}
              replies={data.replies}
              replyCount={data.reply_count}
          />
      </div>
    )
  }
}
export default connect(state=>(state.details))(index)