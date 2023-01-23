import SingleFreelanceProject from "./SingleFreelanceProject";
import SingleProject from "./SingleProject";

const Projects = ()=>{
    return (
        <section className="mt-48 px-4 sm:px-20 xl:px-36 pb-40" id="last-works">
            <h2 className="text-3xl sm:text-5xl lg:6xl text-center font-sourceCodePro text-secondary">
                PREMIER PROJECTS
            </h2>
            <div className="works mt-24">
                <SingleProject
                    hasVideoLink = {true}
                    videolink={"https://youtu.be/8_DPBU-wMnQ"}
                    reverse={true}
                    liveSite={true}
                    codeLink={'https://github.com/Aryanr64x/Digimart'}
                    image={'/projects/digimart.png'}
                    name="Digimart: Digital Asset Marketplace"
                    info="This is a digital asset marketplace which has a shopping cart in frontend built with the power of ContextAPI in React. The React App uses SSG with NextJS and Stripe is used as a payment gateway"
                    tag1="NextJS"
                    tag2="Stripe"
                    tag3="NodeJS"
                    link="https://digidukaan.netlify.app/" />

                <SingleProject
                    hasVideoLink={false}
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
                    hasVideoLink={true}
                    videolink = {"https://youtu.be/8a1pxYPZQnM"}
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
                    hasVideoLink={true}
                    videolink = {"https://youtu.be/5WXvpMVP2Bw"}
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

            <div>
                <h2 className="text-3xl mt-64 sm:text-5xl lg:6xl text-center font-sourceCodePro text-secondary">
                    OTHER STATIC WEBSITES/BLOG
                </h2>
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-x-16 ">
                    <SingleFreelanceProject
                        title={"Neovision Marketing : (Client Project)"}
                        tag1={"Agency"}
                        tag2={"Responsive"}
                        tag3={"Client"}
                        info={"This was a marketing website built for a business of a client. This website followed conversion centered design , generating leads for the client"}
                        link = {'https://neovisionmarketing.netlify.app/'}
                        image = {'/projects/freelance/neovision.png'}
                    />

                    <SingleFreelanceProject
                        title={"Start App Marketing Website"}
                        tag1={"Startup"}
                        tag2={"Marketing"}
                        tag3={"Webflow"}
                        info={"This is a concept website for a startup, that is built using no code website builder Webflow. This was a venture into no-code website builders world for me 😊 "}
                        link = {'https://team-app.webflow.io/'}
                        image = {'/projects/freelance/teamapp.png'}
                    />
                </div>
            </div>

        </section>
    );
}

export  default  Projects;