import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Form = ({ nAssignment, handleSubmit, history }) => {

  const f1 = {
    textAlign: "center",
    margin: "0 32",
  }

  const [formData, setFormData] = useState({
    nAssignment,
    });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
 
  const handleSubmisson = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    history.push("/assignments");
  };

  return (
    <body>
    <Header />
      <form style={f1} onSubmit={handleSubmisson}>
        <section class="hero is-large is-dark">
          <div class="hero-body">
             <input 
                class="input is-large has-text-white" 
                placeholder="assignment" 
                type="text"
                onChange={handleChange}
                value={formData.task}
                name="task"
              />
             <br />
             <div class="has-text-centered is-size-3">
             <input
                type="checkbox"
                name="new_material"
                checked={formData.new_material}
                onChange={handleChange}
              />{" "}&nbsp;New Material&emsp; 
              <input
                type="checkbox"
                onChange={handleChange}
                value={formData.developing_material}
                name="developing_material"
              />&nbsp;Developing Material&emsp;
              <input
                type="checkbox"
                onChange={handleChange}
                value={formData.performance_material}
                name="performance_material"
              />&nbsp;Performance Material&emsp;
              <input
                type="checkbox"
                onChange={handleChange}
                value={formData.technique}
                name="technique"
              />&nbsp;Technique&emsp;
              <input
                type="checkbox"
                onChange={handleChange}
                value={formData.musicianship}
                name="musicianship"
              />&nbsp;Musicianship
             </div>
               <br></br>
             <input type="submit" name="" value="Add Assignment" />
            </div>
        </section>
      </form>
      <Footer />
    </body>
  );
};

export default Form;