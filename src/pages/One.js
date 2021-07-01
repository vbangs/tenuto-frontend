import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";

const One = ({ assignments, match, editAssignment, deleteAssignment }) => {
  const id = parseInt(match.params.id);
  const assignment = assignments.find((assignment) => assignment.id === id);

  return (
    <div>
    <Header />
      <section class="hero is-fullheight has-background-grey-darker">
          <div class="hero-body">
             <div class="container has-text-centered">
                <div class="columns is-centered is-9">
                  <p class="title is-2 has-text-white">
                    <h1>{assignment.task}</h1>
                      <br></br>
                      <button onClick={(event) => editAssignment(assignment)}>Edit</button>&emsp;
                      <button onClick={(event) => deleteAssignment(assignment)}>Delete</button>
                      <br></br>
                      <br></br>
                      <Link to="/assignments">
                        <button>Home</button>
                      </Link>
                  </p>
                </div>
              </div>
          </div>
          <div class="columns is-mobile is-centered"></div>
          <br></br>
      </section>
    </div>
  );
};

export default One;