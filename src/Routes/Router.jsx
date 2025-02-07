import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from '../Pages/Home/Home'
import { About } from '../Pages/About/About'
import { Mainlayout } from '../Layout/Mainlayout'

export const Router = () => {
  return (
    <Routes>
        <Route  path='/' 
        element={<Mainlayout></Mainlayout>}>
            <Route index path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}> </Route>
        </Route>
    </Routes>
  )
}
