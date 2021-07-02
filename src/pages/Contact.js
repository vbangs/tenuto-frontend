import React from "react";
import Header from "../components/header";
import ContactForm from "../components/contactform";
import Footer from "../components/footer";

const Contact = () => {
    return (
        <body>
            <Header />
            <section class="hero is-fullheight has-background-dark">
            <div class="hero-body">
                <ContactForm />
            </div>
            </section>
            <Footer />
        </body>
    )}

export default Contact