import SingleSkill from "./SingleSkill";

const Skills = () => {
    return (
        <div className="font-sourceCodePro px-4 lg:px-20 xl:px-32">
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
                            MongoDB as the exclusive backend.
                        </p>
                        <br/>
                        <p>
                            Above all, these tech skills are only depictive of my passion for software development,
                            and I believe since I can adopt any other frontend/backend architecture !
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-x-3 gap-y-6  mt-16 md:mt-0">
                    <SingleSkill src="/react.png"/>
                    <SingleSkill src="/next.png" />
                    <SingleSkill src="/tailwind.jpg" />
                    <SingleSkill src="/js.png" />
                    <SingleSkill src="/node.png" />
                    <SingleSkill src="/mongo.png" />
                    <SingleSkill src="/html52.png" />
                    <SingleSkill src="/css.png" />
                    <SingleSkill src="/figma.png" />

                </div>
            </div>
        </div>
    );
}

export default Skills;