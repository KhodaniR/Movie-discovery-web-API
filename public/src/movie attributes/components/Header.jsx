import { useState,useEffect } from 'react'
import Logo from '../assets/Logo.svg'
import Menu from '../assets/Menu.svg'
import SearchBar from './SearchBar'

const Header = ({onSearch}) => {
  
  return (
    <div className="h-[80px] absolute top-0 z-50 w-full px-8 flex items-center   bg-transparent">
      <div className="px-4">
        <a href="/" className="text-black w-[186px] h-[50px]">
          <img src={Logo} className="" alt="logo" />
        </a>
      </div>
      <div className="flex items-center  justify-evenly flex-1">
        <SearchBar onSearch={onSearch} />
        <div className="flex items-center gap-4">
          <p className="text-white text-[24px]">Sign in</p>
          <img src={Menu} alt="menu" />
        </div>
      </div>
    </div>
  )
}

export default Header
