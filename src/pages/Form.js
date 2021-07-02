import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Form = ({ nAssignment, handleSubmit, buttonLabel, history }) => {

  const formAlign = {
    textAlign: "center",
    margin: "auto"
  }

  const [formData, setFormData] = useState(nAssignment);

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
      <section class="hero is-fullheight has-background-dark">
        <div class="hero-body">
          <form style={formAlign} class="has-text-white" onSubmit={handleSubmisson}>
             <input  
                placeholder="Assignment" 
                type="text"
                class="has-text-white"
                onChange={handleChange}
                value={formData.task}
                name="task"
              />
             <br />
             <div class="has-text-centered is-size-3">
             <input
                type="checkbox"
                name="new_material"
                isChecked={formData.new_material}
                onChange={handleChange}
              />&nbsp;New Material&emsp; 
              <input
                type="checkbox"
                onChange={handleChange}
                isChecked={formData.developing_material}
                name="developing_material"
              />&nbsp;Developing Material&emsp;
              <input
                type="checkbox"
                onChange={handleChange}
                isChecked={formData.performance_material}
                name="performance_material"
              />&nbsp;Performance Material&emsp;
              <input
                type="checkbox"
                onChange={handleChange}
                isChecked={formData.technique}
                name="technique"
              />&nbsp;Technique&emsp;
              <input
                type="checkbox"
                onChange={handleChange}
                isChecked={formData.musicianship}
                name="musicianship"
              />&nbsp;Musicianship
             </div>
             <br></br>
                <input class="button is-medium has-text-white is-success is-outlined" type="submit" value={buttonLabel} />
            </form>
          </div>
        </section>
      <Footer />
    </body>
  );
};

export default Form;