import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from 'aos';
import "aos/dist/aos.css";

const SingleProject = ({ reverse, image, name, info, tag1, tag2, tag3, link, liveSite, codeLink, videolink , hasVideoLink}) => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])

    const [showText, setShowText] = useState(false)
    const r1 = (!reverse) ? "lg:order-1" : ""
    const r2 = (!reverse) ? "lg:order-2" : ""
    const classname = "grid  grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mt-32 ";
    return (
        <div className={classname}>
            <div className={'flex flex-col justify-center relative order-1 flex-1 '+r2+' ' + ((reverse) ? ' items-start' : ' items-end')} data-aos={(reverse) ? 'fade-right' : 'fade-left'}>
                <a href={(liveSite) ? (link) : (codeLink)}>
                    <motion.img onMouseEnter={() => { setShowText(true) }} onMouseLeave={() => { setShowText(false) }} whileHover={{ translateX: 10, translateY: -10, opacity: 0.4 }} transition={{ duration: 0.5 }} className="h-full rounded-md cursor-pointer"
                        src={image} alt="" />
                    {
                        (showText) ? (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="absolute top-1/2 left-1/2 -ml-24 text-xl font-bold font-sourceCodePro">
                                {(liveSite) ? ("VISIT LIVE SITE") : ("SEE SOURCE CODE")}
                            </motion.div>) : (
                            <div>

                            </div>)
                    }
                </a>
            </div>
            <div className={"flex flex-col flex-1 order-2 justify-center items-center lg:items-start "+r1} data-aos={(reverse) ? 'fade-left' : 'fade-right'}>
                <div className="text-3xl sm:text-4xl font-sourceCodePro text-secondary">
                    {name}
                </div>
                <div className="mt-4 flex">
                    <span className=" text-primary  bg-tertiary font-semibold mr-4 px-2 py-1 rounded text-sm sm:text-base" >
                        {tag1}
                    </span>
                    <span className="text-primary bg-tertiary font-semibold mr-4  px-2 py-1 rounded text-sm sm:text-base">
                        {tag2}
                    </span>
                    <span className="text-primary bg-tertiary font-semibold mr-4  px-2 py-1 rounded text-sm sm:text-base">
                        {tag3}
                    </span>
                </div>
                <div className="text-center sm:text-left sm:text-lg mt-8 font-sourceCodePro">
                    {info}
                </div>
                <div className="mt-8 text-sm md:text-base font-sourceCodePro flex flex-wrap items-center justify-center md:justify-start">

                    <motion.a href={codeLink} className="bg-secondary text-primary mt-4 py-1 md:py-2 px-2  md:px-4  font-semibold mr-4" whileHover={{ scale: 1.1, opacity: 0.8 }} transition={{ duration: 0.5 }}>
                        SEE SOURCE CODE
                    </motion.a>

                    {
                        (liveSite) ? (<motion.a href={link} className="bg-secondary mt-4 text-primary py-1 md:py-2 px-2  md:px-4  font-semibold mr-4" whileHover={{ scale: 1.1, opacity: 0.8 }} transition={{ duration: 0.5 }}>
                            VISIT LIVE SITE
                        </motion.a>) : ("")
                    }

                    

                    {

                        (hasVideoLink) ? (
                        <motion.a href={videolink} className="bg-secondary mt-4 text-primary py-1 md:py-2 px-2  md:px-4  font-semibold mr-4 cursor-pointer" whileHover={{ scale: 1.1, opacity: 0.8 }} transition={{ duration: 0.5 }}>
                            SEE VIDEO 
                        </motion.a>) : ("")
                    }



                </div>
            </div>
            
        </div>
    )
}

export default SingleProject;