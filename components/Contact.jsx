import React from 'react';


import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';
const Contact = () => {




    return (
        <section className="pt-44  px-2 sm:px-12 xl:px-32" id="contact">
            <h2 className="text-3xl sm:text-5xl lg:6xl text-center font-sourceCodePro text-secondary">
                CONTACT ME
            </h2>
            <div className="lg:grid grid-cols-2 mt-16">
                <ContactLeft />
                <ContactRight />
            </div>
        </section>
    );
};

export default Contact;