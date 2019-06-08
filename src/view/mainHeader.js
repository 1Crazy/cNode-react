import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Layout, Row, Col, Divider, Menu, Icon} from 'antd'

export default class mainHeader extends Component {
  render() {
    return (
      <Layout.Header>
        <Row className='wrap'>
          <Col md={6} xs={24}>
            <h1 id="logo">cNode</h1>
          </Col>
          <Col md={18} xs={0}>
            <Divider type='vertical' className='headerDivider' />
            <Menu 
              mode='horizontal'
              id='nav'
              theme='light'
            >
              <Menu.Item>
                <Link to='/index'><Icon type='home' />首页</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/book'><Icon type='book' />教程</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/about'><Icon type='info-circle-o' />关于</Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Layout.Header>
    )
  }
}
