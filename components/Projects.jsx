import SingleProject from "./SingleProject";

const Projects = ()=>{
    return (
        <section className="mt-48 px-4 sm:px-20 xl:px-36 pb-40" id="last-works">
            <h2 className="text-3xl sm:text-5xl lg:6xl text-center font-sourceCodePro text-secondary">
                MY PROJECTS
            </h2>
            <div className="works mt-24">
                <SingleProject
                    reverse={true}
                    liveSite={true}
                    codeLink={'https://github.com/Aryanr64x/Digimart'}
                    image={'/projects/digimart.png'}
                    name="Digimart: Digital Asset Marketplace"
                    info="This is a digital asset marketplace which has a shopping cart in frontend built with the power of ContextAPI in React. The React App uses SSG with NextJS and Stripe is used as a payment gateway"
                    tag1="NextJS"
                    tag2="Stripe"
                    tag3="NodeJS"
                    link="https://digimartt.netlify.app/" />

                <SingleProject
                    liveSite={true}
                    codeLink={'https://github.com/Aryanr64x/nextport'}
                    image={'/projects/sakedes.png'}
                    name="Sakedes: Web Design Agency"
                    info="This is an agency website built in NextJS that uses Sanity IO , A popular Headless CMS to fetch/insert data from/into . The website also has a complete blog system and is seo friendly due to SSG in NextJS"
                    tag1="NextJS"
                    tag2="TailwindCSS"
                    tag3="Sanity CMS"
                    link="https://sakedes.netlify.app/" />


                <SingleProject
                    image={'/projects/chatio2.png'}
                    liveSite={false}
                    reverse={true}
                    codeLink={'https://github.com/Aryanr64x/Chatio-React-Native-Chat-App'}
                    name="Chatio: RealTime Chat App"
                    info="This is a realtime chat app built in React Native. It uses Tailwind CSS in React Native for easy styling of things and websockets for realtime communication."
                    tag1="React Native"
                    tag2="TailwindCSS"
                    tag3="Web Sockets"
                    link="https://neovisionmarketing.netlify.app/" />

                <SingleProject
                    image={'/projects/doodlejump.png'}
                    liveSite={true}
                    reverse={false}
                    codeLink={'https://github.com/Aryanr64x/DoodleSpaceJump'}
                    name="Doodle Space Jump Game"
                    info="This is a simple doodle jump like  game project built in javascript. The game was built without any JS Framework or Library , and explores advanced css positioning "
                    tag1="Vanilla JS"
                    tag2="CSS Positioning"
                    tag3="Game"
                    link="https://doodlespacejump.netlify.app/" />


            </div>
        </section>
    );
}

export  default  Projects;