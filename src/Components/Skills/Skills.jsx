import {motion} from "motion/react"
import { useInView } from "framer-motion";

import { useRef } from "react";



export const Skills = () => {
  const imageLinks = [
    { name: "HTML", url: "https://i.ibb.co.com/PK8gkYq/icons8-html-96.png" },
    { name: "CSS", url: "https://i.ibb.co.com/d03jG3SM/icons8-css-96.png" },
    { name: "JavaScript", url: "https://i.ibb.co.com/nNjKLjNj/icons8-javascript-96.png" },
    { name: "React.js", url: "https://i.ibb.co.com/Tx5kFqqf/icons8-react-js-96.png" },
    { name: "Tailwind CSS", url: "https://i.ibb.co.com/Tx7CXdHm/icons8-tailwindcss-96.png" },
    { name: "Figma", url: "https://i.ibb.co.com/GQ2gkyZT/icons8-figma-96.png" },
    { name: "Node.js", url: "https://i.ibb.co.com/Hp2wvBXz/icons8-nodejs-96.png" },
    { name: "Express.js", url: "https://i.ibb.co.com/tpm3PfxT/icons8-express-js-96.png" },
    { name: "MongoDB", url: "https://i.ibb.co.com/4gVQJv92/icons8-mongo-db-96.png" },
    { name: "Firebase", url: "https://i.ibb.co.com/bjWTDSNs/icons8-firebase-96.png" },
    { name: "TypeScript", url: "https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000" },
    {name:"Github" ,
      url:"https://i.ibb.co.com/tMx9DyWG/icons8-github-96.png"}
  ];
  const ref=useRef(null)
  const isInView=useInView(ref,{  margin: "-100px" 
    

  })
  

  return (
    <div className="container mx-auto ">
        
        <div className="text-center py-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 text-white">My Skills</h2>
      <p className="text-sm sm:text-base lg:text-lg text-center mb-8 sm:mb-12">
        Technologies & tools I work with to build amazing web experiences.
      </p>
    </div>

    <div>

    <figure  ref={ref} className="grid grid-cols-2 lg:grid-cols-6 gap-4 space-y-6 ">
  {imageLinks.map((image, index) => (
    <motion.div
   
    initial={{ opacity: 0, scale: 0.8 }}
    animate={isInView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 2, delay:index * 0.1 }}
    key={index} 
    className="flex flex-col items-center py-4 h-34 hover:border-b">
      <img src={image.url} alt={image.name} className="w-20  " />
      <p className="mt-2 text-sm font-semibold">{image.name}</p>
    </motion.div>
  ))}
</figure>



    


    </div>
    </div>
  )
}
