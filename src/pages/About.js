import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const About = () => {
    
    const abouth1 = {
        padding: "90px 0 0 15%"
      }
      
    const aboutStyle = {
        padding: "0 15%"
      }

    const button = {
        textAlign: "center",
        margin: "0 15%"
    }

    return (
        <body>
        <Header />
        <section class="hero is-fullheight has-background-dark">
            <div class="hero-body">
                <div class="container has-text-left">
                <h1 style={abouth1} class="has-text-white">About</h1>
                        <p style={aboutStyle} class="has-text-white is-size-3">
                            <i>Tenuto</i> allows musicians to organize their practice sessions according to 
                            Gerald Klickstein's Five Practice Zones, which include:  
                            < br />< br />
                            <b>New Material</b> - any unattempted pieces of music, all of which are intended
                            to be played at slow or moderate tempos (30% of a session)
                            < br />< br />
                            <b>Developing Material</b> - any pieces that can be 
                            easily played or sung closer to their intended tempos; practice might entail exploring different manners of interpretation, increasing the tempo of a piece and 
                            commiting music to memory (20% of a session)
                            < br />< br />
                            <b>Performance Material</b> - any pieces that are felt to be artistically complete (15% of a session)
                            < br />< br />
                            <b>Technique</b> - scales, arpeggios, etudes  
                            or other exercises aimed at strengthening the physical playing or singing acumen (15-20% of a session)  
                            <br /><br />
                            <b>Musicianship</b> - any sight-reading, improvisation or other educational activities that may enrich the scope of 
                            musical practice (15-20% of a session)
                        </p>
                        <br />
                <a style={button} class="button is-medium is-info is-outlined">
                    <Link class="has-text-white" to="/assignments">Home</Link>
                </a>
                </div>
            </div>
        </section>
        <Footer />
        </body>
    )}

export default About
