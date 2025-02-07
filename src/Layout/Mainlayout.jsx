import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Outlet } from 'react-router'

export const Mainlayout = () => {
  return (
    <div className='bg-black text-white '>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}
