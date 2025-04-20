"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lens } from "@/components/magicui/lens";

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import { BorderBeam } from "@/Components/magicui/border-beam";
import { ShinyButton } from "@/Components/magicui/shiny-button";
import { FaGithub } from "react-icons/fa";


export const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      fetch("/projects.json") 
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setProjects(data)})
        .catch((error) => console.error("Error fetching projects:", error));
    }, []);
  return (
    <div className="container mx-auto py-10 h-screen bg-black">
    <div>
    <h2 className="text-3xl font-bold text-center mb-6 text-white">Projects</h2>
    <h5 className='text-center mb-12'>Check out my creations—turning ideas into seamless digital experiences!</h5>
    </div>
      <div className="grid grid-cols-1 
      md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-1 bg-black px-2">

        {
          projects.map((card,index)=>
          <div>
             <Card className="relative 
             border-none  shadow-[0_0_0_0.5px_rgba(255,255,255,0.6)]
               bg-black">
      <CardHeader>
        <Lens
          zoomFactor={2}
          lensSize={150}
          isStatic={false}
          ariaLabel="Zoom Area"
        >
          <img
            src={card.image}
            alt="image placeholder"
            width={500}
            height={500}
          />
        </Lens>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl text-white mb-1">{card.name}</CardTitle>
        <CardDescription className={"text-white opacity-80"}>
        {card.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="space-x-4">
        <Button>
          <Link to={card.liveLink} target="_blank" rel="noopener noreferrer">Live Link</Link>
        </Button>
        <Button variant="secondary"><FaGithub></FaGithub></Button>
      </CardFooter>
      <CardFooter className="space-x-4 grid grid-cols-2 gap-4 md:grid-cols-4">
         {
          card.techStack.map(tech=>
          <Button className="bg-white/20 text-white text-xs" > {tech}</Button>)
         }
        </CardFooter>
       
      <BorderBeam duration={8} size={100} />

    </Card>

          </div>)
        }
    
      </div>
    </div>
  )
}
