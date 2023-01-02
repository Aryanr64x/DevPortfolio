import {useEffect, useState} from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {

    return (

        <div className="text-white" style={{backgroundImage: "url('/herobgfilter.png')"}}>
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
  );
}


