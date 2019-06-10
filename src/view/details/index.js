import React, { Component } from 'react'
import TxtDetails from './txtDetails'
import data from './data'
import ReplyList from './replyList'
export default class index extends Component {
  render() {
    return (
      <div className='wrap'>
          <TxtDetails 
              loading={false}
              data={data.data}
          />
          <ReplyList 
              loading={false}
              replies={data.data.replies}
              replyCount={data.data.reply_count}
          />
      </div>
    )
  }
}
