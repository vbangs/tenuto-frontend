import React from "react";
import Assignment from "../components/assignment";
import PieChart from "../components/chart";
import Header from "../components/header";
import { Link } from "react-router-dom";

const All = (props) => {

    const h1 = {
        textAlign: "center",
        margin: "10px",
    }
     
    return props.assignments.map((assignment) => (
        <div>
        <Header />
        <section class="hero has-background-grey-darker">
        <div class="hero-body">
        <h1 class="has-text-white" style={h1}>Week of {assignment.week_of} </h1>
        <div class="hero-body">
                 <div class="container has-text-centered">
                     <div class="columns is-centered">
                     <div class="column is-5"> 
                             <h1 style={h1} class="title is-2">
                                <Assignment
                                    assignment={assignment} 
                                    key={assignment.id} 
                                />  
                             </h1>
                             <br />
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
                        <a class="button is-medium is-info is-outlined">
                            <Link to="/new">New Assignment</Link>
                        </a>
                     </p>
                 </div>
             </div>
            </div>
        </section>
     </div>
        )
    )
}

export default All