import React from "react";
import Assignment from "../components/assignment";
import PieChart from "../components/chart";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const All = (props) => {

    const h1 = {
        textAlign: "center",
        margin: "7%",
    }
    
    const h2 = {
        textAlign: "center",
    }
     
    return (
        <body>
        <Header />
        <section class="hero is-fullheight has-background-grey-darker">
        <h1 style={h1} class="has-text-white">Current Assignments</h1>
            <div class="hero-body">
                 <div class="container has-text-centered">
                     <div class="columns is-centered">
                     <div class="column is-5"> 
                             <h2 style={h2} class="title is-2">
                             {props.assignments.map((assignment) => (
                                <Assignment
                                    assignment={assignment} 
                                    key={assignment.id} 
                                />))} 
                             </h2>
                     </div>
                     <div class="column is-5 is-offset-1">
                             <figure class="image is-8by8">
                                 <PieChart />
                             </figure>
                     </div>
                     </div>
                     <div class="columns is-mobile is-centered"></div>
                     <br></br>
                     <p class="has-text-centered">
                        <a class="button is-medium is-success is-outlined">
                            <Link class="has-text-white" to="/new">New Assignment</Link>
                        </a>
                     </p>
                 </div>
             </div>
        </section>
        <Footer />
     </body>
        )
}

export default All