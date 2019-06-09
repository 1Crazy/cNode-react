import React, { Component } from 'react'
import {Row, Col} from 'antd'
import List from './list.js'
import IndexMenu from './indexMenu'

export default class index extends Component {
  render() {
    console.log(this.props)
    return (
      <Row className='wrap'>
        <Col md={6} xs={0} className='indexSider'>
          <IndexMenu 
            id='indexMenu'
            mode='vertical'
          />
        </Col>
        <Col md={0} xs={24}>
          <IndexMenu 
            id='indexXsMenu'
            mode='horizontal'
          />
        </Col>
        <Col 
            md={18}
            xs={24}
            className='indexList'
        >
          <List />
        </Col>
      </Row>
    )
  }
}
