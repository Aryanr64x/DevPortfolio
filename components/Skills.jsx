import SingleSkill from "./SingleSkill";

const Skills = () => {
    return (
        <div className="font-sourceCodePro px-4 lg:px-20 xl:px-32 mt-32" >
            <div className="text-center text-secondary text-7xl ">
                Skills
            </div>
            <div className="grid md:grid-cols-2 gap-x-20 mt-16">
                <div>
                    <div className="text-5xl">
                        My Projects Follow <span className="text-secondary"> Industry Standards </span>
                    </div>
                    <div className="mt-8">
                        <p>
                            My Skillset include technologies that are widely adopted in the industry .
                            React is the core of frontend skillset with Nextjs being used for making
                            oustanding websites and React Native for mobile app.
                        </p>
                        <br/>
                        <p>
                            For the backend I embrace NodeJS with the express framework along with
                            Prisma and Mysql as an exclusive backend. Apart from that I also have knowledge of NOSQL 
                            Databases like MongoDB
                        </p>
                        <br/>
                        <p>
                        These skills only scratch the surface when talking about my passion for software development.
                         I am confident in my ability to easily adopt other frontend or backend technologies that may be required for any particular project.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-x-3 gap-y-6  mt-16 md:mt-0">
                    <SingleSkill src="/react.png" link="https://reactjs.org/"/>
                    <SingleSkill src="/next.png" link="https://nextjs.org/"/>
                    <SingleSkill src="/tailwind.jpg" link = "https://tailwindcss.com/"/>
                    <SingleSkill src="/js.png" link="https://www.javascript.com/"/>
                    <SingleSkill src="/node.png" link="https://nodejs.org/en/"/>
                    <SingleSkill src="/prisma.png" link="https://www.prisma.io/"/>
                    <SingleSkill src="/html52.png" link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" />
                    <SingleSkill src="/css.png" link="https://developer.mozilla.org/en-US/docs/Web/CSS"/>
                    <SingleSkill src="/figma.png" link="https://www.figma.com/"/>

                </div>
            </div>
        </div>
    );
}

export default Skills;