// example Layout.js
import React from 'react'
import Footer from './Footer'

export default ({ children }) => (
  <div
    style={{
      width: '90vw',
      height: '100vw',
      margin: '100px'
    }}>
    {children}
    <Footer />
  </div>
)
