import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu, Icon} from 'antd'

class Nav extends Component {
  
  state = {
    now: this.getNow(this.props.location)
  }

  shouldComponentUpdate(nextPorps){
    let now = this.getNow(nextPorps.location)
    if(now !== this.state.now){
      this.setState({
        now
      })
      return false;
    }
    return true;
  }

  getNow(location){
    let now = location.pathname.split('/')
    return now[1]
  }
  render() {
    let {mode, id} = this.props;
    return (
      <Menu 
        mode={mode}
        id={id}
        theme='light'
        selectedKeys={[this.state.now]}
      >
        <Menu.Item key="index">
          <Link to='/index/all'><Icon type='home' />首页</Link>
        </Menu.Item>
        <Menu.Item key="book">
          <Link to='/book'><Icon type='book' />教程</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to='/about'><Icon type='info-circle-o' />关于</Link>
        </Menu.Item>
      </Menu>
    )
  }
}
export default  withRouter((props)=>{
  let {mode,id,location} = props
  return <Nav
    mode = {mode}
    id = {id}
    location = {location}
  />
})