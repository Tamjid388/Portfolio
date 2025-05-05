import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import profile from "../../assets/profile.png";

import { Dock, DockIcon } from "../magicui/dock";

import { TypingAnimation } from "../magicui/typing-animation";


export const Banner = () => {
  return (
    <section
      className="container mx-auto  flex items-center
     py-12 px-6 md:px-12 lg:px-24"
    >
      <div
        className="container mx-auto flex flex-col-reverse
     md:flex-row items-center justify-between gap-6"
      >
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-white space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Hello <br></br>
            <span className="text-main-color">Tamjid Ahmed</span>
          </h1>

          <TypingAnimation className="text-lg font-poppins">
            A passionate Junior Web Developer dedicated to crafting visually
            appealing and user-friendly websites. Skilled in React, Tailwind
            CSS, and JavaScript, I enjoy turning ideas into responsive,
            high-performance web experiences. Always eager to learn new
            technologies and grow as a developer.
          </TypingAnimation>

          <div className="flex gap-4 mt-6">
            <div className="flex gap-4 mt-6">
              <a href="/resume.pdf" download>
                <button
                  className="btn bg-black text-white border border-white
    hover:bg-main-color
      hover:text-white hover:border-none transition duration-500 ease-in-out"
                >
                  Download Resume
                </button>
              </a>
              <a href="#contact">
                <button
                  className="btn bg-black text-white border
     border-white  
     hover:bg-main-color
      hover:text-white hover:border-none hover:border-transparent
      transition duration-500 ease-in-out
      "
                >
                  Contact Me
                </button>
              </a>
            </div>
          </div>

          {/* Social Dock */}
          <div className="mt-6 w-fit">
            <Dock>
              <DockIcon>
                <a target="_blank" href="https://github.com/Tamjid388">
                  <FaGithub className="text-3xl hover:text-main-color" />
                </a>
              </DockIcon>
              <DockIcon>
                <a
                  href="https://www.linkedin.com/in/tamjid-ahmed-profile59326b/"
                  target="_blank"
                >
                  <FaLinkedin className="text-3xl hover:text-main-color" />
                </a>
              </DockIcon>
              <DockIcon>
                <a href="https://www.facebook.com/tamjid.razin" target="_blank">
                  <FaFacebook className="text-3xl hover:text-main-color" />
                </a>
              </DockIcon>
              <DockIcon>
                <a
                  href="https://www.instagram.com/tamjid.razin/"
                  target="_blank"
                >
                  <FaInstagram className="text-3xl hover:text-main-color" />
                </a>
              </DockIcon>

              <DockIcon>
                <a
                  href="https://wa.me/01741130036"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-3xl hover:text-main-color" />
                </a>
              </DockIcon>
            </Dock>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center ">
          <img
            src={profile}
            alt="Profile"
            className="w-[260px] sm:w-[300px] lg:w-[400px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
