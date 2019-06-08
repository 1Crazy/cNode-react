import React from 'react';
import RouterIndex from  './router/index'
import MainHeader from './view/mainHeader'
import MainFooter from './view/mainFooter'

import './view/index.css'

function App() {
  return (
    <div className='pageWrap'>
      <MainHeader />
      <main className='main' />
      <MainFooter />
    </div>
  )
}

export default App;
