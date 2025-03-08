import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
import profile from "../../assets/profile.png"
import { Dock, DockIcon } from "../magicui/dock"
import { Button } from "../ui/button"
import { TypingAnimation } from "../magicui/typing-animation"
import { Meteors } from "../magicui/meteors"

export const Banner = () => {
  return (
    <div className=' bg-black container mx-auto flex flex-col-reverse md:flex-row justify-center items-center h-screen'>
      
        <div className="  container mx-auto flex flex-col-reverse md:flex-row justify-between items-center min-h-screen px-6 md:px-12 lg:px-24">
  {/* Left Side - Text Section */}

  <div className="w-full md:w-1/2 space-y-6 text-white">
    <h1 className="text-4xl lg:text-6xl font-bold">Hi, I'm Tamjid Ahmed</h1>
    <TypingAnimation className="text-lg lg:text-xl">
      A passionate Front-End Developer specializing in building interactive, responsive, 
      and modern web experiences using React, Tailwind CSS, and JavaScript.
    </TypingAnimation>
    <a href={profile} download>
     <Button variant="outline" className="bg-black py-6 rounded-2xl">Download Resume</Button>
    </a>


    {/* Social Icons */}
    {/* <div className="mt-8 flex gap-x-3">
      <a href="https://github.com/Tamjid388" className="text-2xl hover:text-gray-300">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/tamjid-ahmed-profile59326b/" className="text-2xl hover:text-gray-300">
        <FaLinkedin />
      </a>
      <a href="https://www.facebook.com/tamjid.razin/" className="text-2xl hover:text-gray-300">
        <FaFacebook />
      </a>
    </div> */}


    {/* Magic Ui DOCK */}


   
    <div className="w-fit">
    <Dock >
        <DockIcon><FaGithub className="text-3xl" /></DockIcon>
        <DockIcon><FaLinkedin className="text-3xl" /></DockIcon>
        <DockIcon><FaFacebook className="text-3xl" /></DockIcon>
    </Dock>
</div>
    
  </div>

  {/* Right Side - Image */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img src={profile} alt="Profile" className="w-[300px] lg:w-[400px] rounded-lg shadow-lg" />
  </div>
</div>

       

    </div>
  )
}
