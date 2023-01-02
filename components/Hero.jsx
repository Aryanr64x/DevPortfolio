import {useState} from "react";

const Hero = ()=>{
    const [text, setText] = useState('')
    const [i, setI] = useState(0)
    const finalLetter = "<\Hello World />";


    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //
    //         setI((i)=>{
    //             if(i === finalLetter.length - 1) {
    //                window.clearInterval(interval)
    //             }
    //             setText((text)=>{
    //                 return text+finalLetter[i]
    //             })
    //            return i+1;
    //         })
    //     }, 100)
    //
    //
    //     return ()=>{
    //         window.clearInterval(interval)
    //     }
    //
    // }, [])


        return ( <div className="min-h-screen  text-white flex flex-col items-center justify-center font-sourceCodePro">
            <h1 className="text-8xl text-secondary">
                { finalLetter }
            </h1>
            <h2 className="mt-2 text-4xl name">
                THIS IS <span className=""> ARYAN SAKET </span>
            </h2>
            <div className="mt-0">
                Full Stack Web Developer and UI Designer, Looking For Internship Oppurtunities
            </div>
            <div className="mt-8 flex justify-center">
                <a href="#contact" className="bg-secondary text-primary py-2 px-4 sm:text-xl text-base font-bold mr-4 "> CONTACT ME </a>
                <a href="#last-works" className=" py-2 px-4 border-2 border-secondary font-bold hover:bg-secondary hover:text-primary transition-all duration-500"> SEE MY PROJECTS </a>

            </div>
        </div>);
}

export  default  Hero;