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
                            <i>tenuto</i> allows musicians to organize their practice sessions according to the
                            Gerald Klickstein's Five Practice Zones.  
                            < br />< br />
                            <b>New Material</b> encompasses any unattempted pieces of music and is intended
                            to be played at slow or moderate tempos.  
                            < br />< br />
                            A piece of music becomes <b>Developing Material</b> when the musician can 
                            easily play or sing the piece nearer to the intended tempo of the music.  As the musician develops
                            a piece of music, practice might entail exploring different manners of interpretation, increasing the tempo of the music and 
                            commiting the music to memory.
                            < br />< br />
                            When the musician feels comfortable playing a piece of music at its intended tempo and believes 
                            the piece to be artistically complete, the piece becomes <b>Performance Material</b>. 
                            < br />< br />
                            Lastly, <b>Technique</b> includes any scales, arpeggios, etudes  
                            or other exercises aimed at strengthening the musician's physical playing or singing acumen.  <b>Musicianship</b> entails 
                            any sight-reading, improvisation or other educational activities that may enrich the musician's 
                            practice.
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