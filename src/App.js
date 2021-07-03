import All from "./pages/All";
import One from "./pages/One";
import Form from "./pages/Form";
import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";

import React, { useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";


function App(props) {
  
  const url = "https://tenuto.herokuapp.com/assignments/"

  const [assignments, setAssignments] = useState([]);

  const nullAssignment = {
    task: "",
    new_material: "false",
    developing_material: "false",
    performance_material: "false",
    technique: "false",
    musicianship: "false",
    week_of: ""
  }

  const [targetAssignment, setTargetAssignment] = useState(nullAssignment)

  const getAssignments = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setAssignments(data)
  }

  const addAssignments = async (newAssignment) => {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAssignment)
    })
    getAssignments()
  }

  const getTargetAssignment = (assignment) => {
    setTargetAssignment(assignment)
    props.history.push("/edit")
  }

  const updateAssignment = async (assignment) => {
    const response = await fetch(url + assignment.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(assignment),
    })
    getAssignments()
  }

  const deleteAssignment = async (assignment) => {
    const response = await fetch(url + assignment.id + "/", {
      method: "delete",
    })
    getAssignments()
    props.history.push("/assignments")
  }

  useEffect(() => {
    getAssignments()
  }, [])
  


    return (
      <body>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => (
            <Main />
          )}
        />
        <Route
          path="/about"
          render={(routerProps) => (
            <About />
          )}
        />
         <Route
          path="/contact"
          render={(routerProps) => (
            <Contact />
          )}
        />
        <Route
          path="/assignments"
          render={(routerProps) => (
            <All 
              {...routerProps} 
              assignments={assignments} 
            />    
          )}
        />
        <Route
          path="/assignment/:id"
          render={(routerProps) => (
            <One 
              {...routerProps} 
              assignments={assignments}
              editAssignment={getTargetAssignment}
              deleteAssignment={deleteAssignment} 
            />
          )}
        />
        <Route
          path="/new"
          render={(routerProps) => (
            <Form 
              {...routerProps}
              nAssignment={nullAssignment}
              handleSubmit={addAssignments}
              buttonLabel="Add Assignment"
            />
          )}
        />
        <Route
          path="/edit"
          render={(routerProps) => (
            <Form 
              {...routerProps}
              nAssignment={targetAssignment}
              handleSubmit={updateAssignment}
              buttonLabel="Update Assignment" 
            />
          )}
        />
      </Switch>
    </body>
  );
}

export default App;
