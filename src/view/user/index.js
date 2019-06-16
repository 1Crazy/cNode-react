import React, { Component } from 'react'
import {Avatar,Row,Col} from 'antd'
import data from './data'
import UserList from './userList'
export default class index extends Component {
  render() {
    let {avatar_url,loginname,create_at,score,recent_topics,recent_replies} = data.data
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
          loading={false}
          title='最近创建的话题'
          data={recent_topics}
        />
        <UserList
          loading={false}
          title='最近回复的话题'
          data={recent_replies}
        />
      </div>
    )
  }
}
