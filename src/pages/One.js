import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

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
                    <h2>{assignment.task}</h2>
                      <br />
                      <a class="button is-medium is-warning is-outlined">
                        <Link class="has-text-white" onClick={(event) => editAssignment(assignment)}>Edit</Link>
                      </a>&emsp;
                      <a class="button is-medium is-danger is-outlined">
                        <Link class="has-text-white" onClick={(event) => deleteAssignment(assignment)}>Delete</Link>
                      </a>
                      <br />
                      <br />
                      <br />
                      <a class="button is-medium is-info is-outlined">
                            <Link class="has-text-white" to="/assignments">Home</Link>
                      </a>
                  </p>
                </div>
              </div>
          </div>
          <div class="columns is-mobile is-centered"></div>
          <br></br>
      </section>
      <Footer />
    </div>
  );
};

export default One;