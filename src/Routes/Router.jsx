import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from '../Pages/Home/Home'
import { About } from '../Pages/About/About'
import { Mainlayout } from '../Layout/Mainlayout'
import { Projects } from '../Pages/Projects/Projects'
import {  ContactPage } from '@/Pages/Contact/ContactPage'
import { Skills } from '@/Components/Skills/Skills'

export const Router = () => {
  return (
    <Routes>
        <Route  path='/' 
        element={<Mainlayout></Mainlayout>}>
            <Route index path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}> </Route>
            <Route path='/portfolio' element={<Projects></Projects>}> </Route>
            <Route path='/skills' element={<Skills></Skills>}> </Route>
            <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
        </Route>
    </Routes>
  )
}
