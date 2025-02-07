import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
import profile from "../../assets/profile.png"

export const Banner = () => {
  return (
    <div className='bg-black container mx-auto flex h-screen'>
        <div className="w-full  flex items-center">
            <div className="space-y-6">
            <h1 className="text-4xl font-bold ">Hi, I'm Tamjid Ahmed</h1>
    <p className="text-lg  mt-4 ">
        A passionate Front-End Developer specializing in building interactive, responsive, 
        and modern web experiences using React, Tailwind CSS, and JavaScript.
    </p>
    <a href={profile} download>
        <button className="border-2 px-4 py-2">Download</button>
     
    </a>

     {/* Social */}
     <div className="mt-8 flex gap-x-1">
            <a href="https://github.com/Tamjid388" className="text-white text-2xl  ">
              <FaGithub></FaGithub>
            </a>
            <a href="https://www.linkedin.com/in/tamjid-ahmed-profile59326b/" className="text-white text-2xl  ">
              <FaLinkedin></FaLinkedin>
            </a>
            <a href="https://www.facebook.com/tamjid.razin/" className="text-white text-2xl  ">
             <FaFacebook></FaFacebook>
            </a>

        </div>
            </div>
        </div>
        <div className="w-1/2 flex items-center">
            <img src={profile} alt="" />

        </div>
       

    </div>
  )
}
