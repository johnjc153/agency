import React from 'react';

import { Footer, Blog, WhatAgency, Header, Features } from './containers'
import { Cta, Brand, Navbar } from './components'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header/>
      </div>
      <Brand />
      <WhatAgency />
      <Features />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App