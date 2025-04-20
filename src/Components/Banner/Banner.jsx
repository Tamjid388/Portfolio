import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
import profile from "../../assets/profile.png"
import blob from "../../assets/blob1.png"
import { Dock, DockIcon } from "../magicui/dock"
import { Button } from "../ui/button"
import { TypingAnimation } from "../magicui/typing-animation"
import { Meteors } from "../magicui/meteors"

export const Banner = () => {
  return (

    <section className="container mx-auto bg-black min-h-screen flex items-center
     py-12 px-6 md:px-12 lg:px-24">
    <div className="container mx-auto flex flex-col-reverse
     md:flex-row items-center justify-between gap-6">
      
      {/* Left Side */}
      <div className="w-full md:w-1/2 text-white space-y-4">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Hi <br></br> I'm Tamjid Ahmed
        </h1>

        <TypingAnimation className="text-lg">
          A passionate Front-End Developer specializing in building interactive, responsive, 
          and modern web experiences using React, Tailwind CSS, and JavaScript.
        </TypingAnimation>

        <a href={profile} download>
          <Button variant="outline" className="bg-black py-4 px-6 rounded-xl text-white border border-white hover:bg-white hover:text-black transition">
            Download Resume
          </Button>
        </a>

        {/* Social Dock */}
        <div className="mt-6 w-fit">
          <Dock>
            <DockIcon><FaGithub className="text-3xl" /></DockIcon>
            <DockIcon><FaLinkedin className="text-3xl" /></DockIcon>
            <DockIcon><FaFacebook className="text-3xl" /></DockIcon>
          </Dock>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex justify-center bg-[url(/img/mountains.jpg)]">
        <img
          src={profile}
          alt="Profile"
          className="w-[260px] sm:w-[300px] lg:w-[400px] rounded-lg shadow-lg"
        />
      </div>

    </div>
  </section>
  )
}
