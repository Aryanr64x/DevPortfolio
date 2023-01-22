import {useEffect, useState} from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {

    return (

        <div className="text-white wrapper" style={{backgroundImage: "url('/herobgfiltercompressed.png')"}}>
            <Head>
                <title>Aryan Saket</title>
            </Head>
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
  );
}


