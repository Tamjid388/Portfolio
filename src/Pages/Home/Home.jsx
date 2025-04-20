import React from 'react'
import { Banner } from '../../Components/Banner/Banner'
import { Skills } from '../../Components/Skills/Skills'
import { Test } from '@/Components/Test/Test'
import { Projects } from '../Projects/Projects'
import { Education } from '@/Components/Education/Education'


export const Home = () => {
  return (
   
    <div className=' '>
       <title>Tamjid Ahmed</title>
      <Banner></Banner>
      <Education></Education>
      {/* <Test></Test> */}
     <Skills></Skills>
     <Projects></Projects>
    </div>
  )
}
