import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="footer flex flex-col md:flex-row
     justify-between  p-4 md:p-10 bg-black text-white  container mx-auto">
  <nav>
    <h6 className="footer-title text-white">Services</h6>
    <a className="link link-hover">Web Development</a>

    <a className="link link-hover">Frontend Development</a>
    <a className="link link-hover">Backend Development</a>
  </nav>
  <nav>
    <h6 className="footer-title">Contact</h6>
    <a className="link link-hover">Email: tamjidahmed388@example.com</a>
    <a className="link link-hover">Whatsapp:01741130036</a>
   
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a className='text-2xl hover:text-purple-600'   href="https://www.linkedin.com/in/tamjid-ahmed-profile59326b/"
                  target="_blank">
        <FaLinkedin></FaLinkedin>
      </a>
      <a className='text-2xl hover:text-purple-600' href="https://www.facebook.com/tamjid.razin" target="_blank">
     <FaFacebook></FaFacebook>
      </a>
      <a className='text-2xl hover:text-purple-600' target="_blank" href="https://github.com/Tamjid388">
        <FaGithub></FaGithub>
      </a>
      <a className='text-2xl hover:text-purple-600'  href="https://wa.me/01741130036"
                  target="_blank"
                  rel="noopener noreferrer">
     <FaWhatsapp></FaWhatsapp>
      </a>
    </div>
  </nav>
</footer>

  )
}
