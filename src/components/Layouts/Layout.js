import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
     <Header />
     <div>{children}</div>
     <footer/>
    </>
  )
}

export default Layout