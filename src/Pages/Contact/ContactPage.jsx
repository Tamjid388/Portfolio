
import { MagicCard } from '@/Components/magicui/magic-card'
import React from 'react'

export const ContactPage = () => {
  return (
    <div className='bg-black  container mx-auto'>
      <section>
      <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left space-y-4">
      <h5 className='text-base font-bold text-main-color'>Elevate your brand with Me</h5>
      <h1 className="text-5xl font-bold">Elevate your <br/> brand
       with <br/>  Me</h1>
      <p className="">
      I’m passionate about crafting modern, responsive web interfaces that deliver great user experiences.
     <br></br> Let’s collaborate to bring your ideas to life through clean design and efficient code.
      </p>
    </div>
    <div className="card  w-full max-w-sm shrink-0 shadow-2xl ">
      <div className="card-body">
        <fieldset className="fieldset">
          {/* Email */}
       <div className="mb-4">
       <label className="label text-white mb-2">Email</label>
       <input type="email" className="input bg-gray-800" placeholder="Email" />
       </div>
        <div className='mb-4'>
        <label className="label text-white  mb-2">Name</label>
          <input type="text
          " className="input bg-gray-800 " placeholder="Enter Your Name" />
        </div>
        <div className="mb-4">

        <label className="label text-white  mb-2">Message</label>
        <textarea rows={5} className="textarea bg-gray-800 text-white" placeholder="Your Message"></textarea>
        </div>
          <button className="btn bg-main-color mt-4 border-none text-white">Send Message</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
      </section>
   
    
    </div>
  )
}























