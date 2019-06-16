import React, { Component } from 'react'
import {Avatar,Row,Col} from 'antd'
import {connect} from 'react-redux'
import axios from 'axios'
import UserList from './userList'
class index extends Component {

  componentDidMount() {
    this.getData(this.props.match.params.id)
  }

  shouldComponentUpdate (nextProps,nextState) {
    let id = this.props.match.params.id
    let nextId = nextProps.match.params.id
    if ( id !== nextId ) {
      this.getData(nextId)
      return false
    }
    return true
  }

  getData (id) {
    this.props.dispatch((dispatch)=>{
      dispatch({
        type: 'USER_UPDATA'
      })
      axios.get(`https://cnodejs.org/api/v1/user/${id}`)
        .then((res)=>{
          dispatch({
            type: 'USER_UPDATA_SUCC',
            data: res.data
          })
        })
        .catch((error)=>{
          dispatch({
            type: 'USER_UPDATA_ERROR'
          })
        })
    })
  }

  render() {
    let {loading,data} = this.props
    let {avatar_url,loginname,create_at,score,recent_topics,recent_replies} = data
    return (
      <div className='wrap'>
        <Avatar src={avatar_url} className='userAvatar' />
        <Row className='userInfo'>
          <Col md={8}>
            用户名:<a>{loginname}</a>
          </Col>
          <Col md={8}>
            积分:<a>{score}</a>
          </Col>
          <Col md={8}>
            注册时间:<a>{create_at.split('T')[0]}</a>
          </Col>
        </Row>
        <UserList
          loading={loading}
          title='最近创建的话题'
          data={recent_topics}
        />
        <UserList
          loading={loading}
          title='最近回复的话题'
          data={recent_replies}
        />
      </div>
    )
  }
}
export default  connect(state=>(state.user))(index)