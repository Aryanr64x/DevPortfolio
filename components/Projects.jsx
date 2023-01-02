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
                    info="Marketing Businesses need marketing too! A professional website built for a facebook ads marketing company. The website has been highly effective in lead conversion of business. "
                    tag1="NextJS"
                    tag2="Stripe"
                    tag3="NodeJS"
                    link="https://neovisionmarketing.netlify.app/" />

                <SingleProject
                    liveSite={true}
                    codeLink={'https://github.com/Aryanr64x/nextport'}
                    image={'/projects/sakedes.png'}
                    name="Sakedes: Web Design Agency"
                    info="Marketing Businesses need marketing too! A professional website built for a facebook ads marketing company. The website has been highly effective in lead conversion of business. "
                    tag1="NextJS"
                    tag2="TailwindCSS"
                    tag3="Sanity CMS"
                    link="https://neovisionmarketing.netlify.app/" />


                <SingleProject
                    image={'/projects/chatio2.png'}
                    liveSite={false}
                    reverse={true}
                    codeLink={'https://github.com/Aryanr64x/Chatio-React-Native-Chat-App'}
                    name="Chatio: RealTime Chat App"
                    info="Marketing Businesses need marketing too! A professional website built for a facebook ads marketing company. The website has been highly effective in lead conversion of business. "
                    tag1="React Native"
                    tag2="TailwindCSS"
                    tag3="Web Sockets"
                    link="https://neovisionmarketing.netlify.app/" />


            </div>
        </section>
    );
}

export  default  Projects;