import { useEffect, useState } from "react";

const Hero = () => {
    const [text, setText] = useState('')
    const [i, setI] = useState(0)
    const finalLetter = "<\Hello World,this is Aryan Saket />";


    useEffect(() => {
        const interval = setInterval(() => {

            setI((i) => {
                if (i === finalLetter.length - 1) {
                    window.clearInterval(interval)
                }
                setText((text) => {
                    return text + finalLetter[i]
                })
                return i + 1;
            })
        }, 100)


        return () => {
            window.clearInterval(interval)
        }

    }, [])


    return (
        <div className="min-h-screen  text-center text-white flex flex-col items-center justify-center font-sourceCodePro px-4 md:px-16">
            <div className="grid  grid-cols-1 lg:grid-cols-2 ">
                <div className="order-1 lg:order-2 flex justify-center items-center">
                    <img src="/avatar4.png"  className="rounded-full shadow-lg shadow-black" alt="" />
                </div>
                <div className="order-2 lg:order-1 mt-4 lg:text-left">
                    <h1 className="text-3xl md:text-5xl  lg:text-6xl  text-secondary">
                        {text}
                    </h1>
                    <h2 className="mt-2  text-xl sm:text-3xl lg:text-4xl name">
                        {/* THIS IS <span className="text-secondary"> ARYAN SAKET </span> */}
                    </h2>
                    <div className="mt-0 text-sm sm:text-base">
                        Full Stack Web Developer and UI Designer, Studying Computer Science, Currently Looking For Internship Opportunities
                    </div>
                    <div className=" mt-8 flex justify-center items-center lg:justify-start">
                        <a href="#contact" className="bg-secondary text-primary py-3 px-4 md:text-base text-sm font-bold mr-4 "> CONTACT ME </a>
                        <a href="#last-works" className=" py-2 px-4 border-2 border-secondary  md:text-xl  font-bold hover:bg-secondary hover:text-primary transition-all duration-500"> SEE MY PROJECTS </a>

                    </div>
                </div>
               
            </div>
        </div>);
}

export default Hero;