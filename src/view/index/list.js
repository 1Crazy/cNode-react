import React, { Component } from 'react'
import {List, Avatar} from 'antd'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
import TxtTag from '../txtTag'
class list extends Component {
  state = {
    page: 1
  }

  componentDidMount () {
    this.getData(this.props.tab);
  }

  // 当组件更新时，收到的新的props
  shouldComponentUpdate (nextPorps, nextState) {
    console.log(nextPorps)
    if (this.props.tab !== nextPorps.tab) {
      this.getData(nextPorps.tab);
      return false
    }
    return true
  }

  getData (tab) {
    this.props.dispatch((dispatch)=>{
      dispatch({
        type: 'LIST_UPDATA'
      })
      axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${this.state.page}&limit=15`)
        .then((res)=>{
          console.log(res.data)
          dispatch({
            type: 'LIST_UPDATA_SUCC',
            data: res.data
          })
        })
        .catch((error)=>{
          console.log(error)
          dispatch({
            type: 'LIST_UPDATA_REEDR',
            data: error
          })
        })
    })
  }

  render() {
    let {loading,data} = this.props
    console.log(this.props)
    return (
      <List 
          loading={loading}
          dataSource={data}
          renderItem={item=>(<List.Item
              actions={['回复'+item.reply_count,
                        '访问'+item.visit_count
                      ]}
                      key={item.id}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.author.avatar_url} />}
              title={<div>
                        <TxtTag data={item} />
                        <Link to={'/details/'+item.id}>
                          {item.title}
                        </Link>
                    </div>}
              description={<p>
                            <Link to={'/user/'+item.author.loginname}>{item.author.loginname}</Link>
                            发表于：{item.create_at.split('T')[0]}
                          </p>}
            />
          </List.Item>)}
      >

      </List>
    )
  }
}
export default connect(state=>state.list)(list)