import React from "react";
import Footer from "../components/footer";

const Main = () => {
    
    const title = {
        fontSize: "400%"
    }

    return (
      <body>
       <section class="hero is-fullheight has-background-grey-dark">
        <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                        <span class="is-size-1">
                        <a href="/assignments" class="has-text-white is-large size-1">
                            <h1 style={title}><i>tenuto</i></h1>
                        </a>
                        </span>
                    </h1>
                </div>
            </div>
       </section>
       <Footer />
      </body>
    )}

export default Main