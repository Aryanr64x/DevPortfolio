import {useEffect, useState} from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {

    return (

        <div className="text-white wrapper">
            <Head>
                <title>Aryan Saket</title>
                <meta
                 property="og:image"
                content="/og.png"
                />

                <meta property="og:title" content="Aryan Saket" />
            </Head>
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
  );
}


