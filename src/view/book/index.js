import React, { Component } from 'react'

import PublicCard from '../publikCard'
import data from './data'

export default class index extends Component {
  render() {
    return (
      <PublicCard 
        data={data}
      />
    )
  }
}
