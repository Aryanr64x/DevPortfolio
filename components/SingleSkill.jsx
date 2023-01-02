import Link from "next/link";

const SingleSkill = ({ src, link })=>{
    return (
        <Link href={link} className="flex  justify-center hover:opacity-80 hover:scale-110 transition-all duration-300">
            <img className="h-24 w-24 sm:h-32 sm:w-32" src={src} />

        </Link>
    );
}


export  default  SingleSkill;