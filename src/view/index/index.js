import React, { Component } from 'react'
import {Row, Col} from 'antd'

import IndexMenu from './indexMenu'

let arr = [];
for (let i=0; i<100; i++) {
  arr.push(<li key={i}>这是第{i}个li</li>)
}

export default class index extends Component {
  render() {
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
          {arr}
        </Col>
      </Row>
    )
  }
}
