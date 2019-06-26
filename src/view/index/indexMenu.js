import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'
import {Menu} from 'antd'
import tab from '../tab'
class IndexMenu extends Component {

  state = {
    now: this.getNow(this.props.location)
  }

  getNow(location){
    let now = location.pathname.split('/')
    return now[2]
  }

  render() {
    return (
      <Menu 
          id={this.props.id}
          mode={this.props.mode}
          selectedKeys={[this.state.now]}
      >
        {tab.map((item)=>{
          if(!item.isIndex){
            return false;
          }
          return (<Menu.Item key={item.tab}>
            <Link to={'/index/'+item.tab}>{item.txt}</Link>
          </Menu.Item>)
        })}
      </Menu>
    )
  }
}

export default withRouter((props)=>{
  let {mode,id,location} = props
  return <IndexMenu
    mode = {mode}
    id = {id}
    location = {location}
  />
})