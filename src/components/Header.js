import React from 'react'
import '../css/background.css'
import HeaderTop from './header-components/HeaderTop'
import HeaderUl from './header-components/HeaderUl'

const Header = () => {
  return (
    <>
    <HeaderTop/>
    <HeaderUl className="w-full" />
    </>
  )
}

export default Header