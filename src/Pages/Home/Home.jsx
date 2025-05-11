import React from "react";
import { Banner } from "../../Components/Banner/Banner";
import { Skills } from "../../Components/Skills/Skills";

import { Projects } from "../Projects/Projects";
import { Education } from "@/Components/Education/Education";
import { ContactPage } from "../Contact/ContactPage";
import { Test2 } from "@/Components/Test/Test2";
import { Footer } from "@/Components/Footer";

export const Home = () => {
  return (
    <div className="bg-[url(darkbg.png)] bg-fixed">
      <title>Tamjid Ahmed</title>
<div className="py-10 md:py-16">
<Banner ></Banner>

</div>

      <div id="education" className="py-10 md:py-16">
        <Education></Education>
      </div>

      <div name="skills" className="py-10 md:py-16">
        <Skills></Skills>
      </div>

      <div id="projects" className="py-10 md:py-16">
        <Projects></Projects>
      </div>
      <div id="contact" className="py-10 md:py-16">
        <ContactPage></ContactPage>
      </div>
      <div id="" className="py-10 md:py-16">
      <Footer></Footer>
      </div>
    </div>
  );
};
