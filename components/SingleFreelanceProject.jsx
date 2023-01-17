import { motion } from "framer-motion";
import { useState } from "react";

const SingleFreelanceProject = ({ tag1, tag2, tag3, info, title, link, image }) => {
    
    const [showText, setShowText] = useState(false)
    
    
    return (
        <div >
            <div className="flex flex-col relative flex-1">
            <a href={(link)}>
                <motion.img onMouseEnter={() => { setShowText(true) }} onMouseLeave={() => { setShowText(false) }} whileHover={{ translateX: 10, translateY: -10, opacity: 0.4 }} transition={{ duration: 0.5 }} className="rounded-md cursor-pointer"
                    src={image} alt="" />
                {
                    (showText) ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="absolute top-1/2 left-1/2 -ml-24 text-xl font-bold font-sourceCodePro text-white">
                            VISIT LIVE SITE
                        </motion.div>) : (<div></div>)
                }
            </a>
            </div>
            <div className="text-3xl sm:text-4xl font-sourceCodePro text-secondary mt-12">
                {title}
            </div>
            <div className="mt-4 flex">
                <span className=" text-primary bg-tertiary font-semibold mr-4 px-2 py-1 rounded text-sm sm:text-base" >
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
        </div>
    );
}

export default SingleFreelanceProject;