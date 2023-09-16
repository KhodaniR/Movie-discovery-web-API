import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import { sidebarData } from '../constants'

const Sidebar = () => {
  return (
    <div className="h-screen fixed left-0 w-[226px]  border-r-2  rounded-r-[50px]  border-stone-500  bg-black">
      <div className="pl-2 py-4 flex flex-col gap-20">
        <div className='py-2'>
          <img src={Logo} className=" w-36 " alt="logo" />
        </div>
        <div className="text-white pl-4 w-full ">
          <ul>
            {sidebarData.map((item) => (
              <Link to={item.link}>
              <li className="flex items-center cursor-pointer h-[86px] gap-2 hover:border-r-4  hover:rounded-l-md hover:border-white ">
                <span className='text-xl'>{item.icon}</span>
                <p className='text-xl font-bold'>{item.label}</p>
              </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
