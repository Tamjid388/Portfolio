import React from 'react'
import { Banner } from '../../Components/Banner/Banner'
import { Skills } from '../../Components/Skills/Skills'
import { Test } from '@/Components/Test/Test'
import { Projects } from '../Projects/Projects'

export const Home = () => {
  return (
    <div className=' '>
      <Banner></Banner>
      {/* <Test></Test> */}
     <Skills></Skills>
     <Projects></Projects>
    </div>
  )
}
