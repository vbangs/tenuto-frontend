# tenuto

**Author:** Veronica Bangs


## Project Summary
Tenuto is an app that allows musicians to organize their practice sessions according to Gerald Klickstein's Five Practice Zones.  Users 
may create, edit and delete assignments; categorize assignments by their corresponding practice zones; and view a graphical representation of Klickstein's suggested practice lengths for each assignment.  Users may also ask any questions or send suggestions via an email contact form.         
</br>
<img width="1019" alt="Screen Shot 2021-07-02 at 7 45 48 PM" src="https://user-images.githubusercontent.com/77699407/124337737-1f21de00-db72-11eb-91a4-00e3243a6337.png"><br></br>

<img width="1019" alt="Screen Shot 2021-07-02 at 7 46 07 PM" src="https://user-images.githubusercontent.com/77699407/124337750-306aea80-db72-11eb-90e2-1e3a7cbbf509.png"><br></br>

<img width="1019" alt="Screen Shot 2021-07-02 at 7 46 22 PM" src="https://user-images.githubusercontent.com/77699407/124337761-3b257f80-db72-11eb-9bad-9b8cdb715f25.png"><br></br>

<img width="1019" alt="Screen Shot 2021-07-02 at 7 46 48 PM" src="https://user-images.githubusercontent.com/77699407/124337777-49739b80-db72-11eb-8e4f-639c9d3ef690.png"><br></br>

<img width="1019" alt="Screen Shot 2021-07-02 at 8 13 06 PM" src="https://user-images.githubusercontent.com/77699407/124337789-5abca800-db72-11eb-833c-4580bcce9b0d.png"><br></br>

<img width="1019" alt="Screen Shot 2021-07-02 at 8 13 19 PM" src="https://user-images.githubusercontent.com/77699407/124337799-66a86a00-db72-11eb-8dd5-a5646898d687.png"><br></br>






## Technology Used
HTML </br>
CSS </br>
Bulma <br>
JavaScript </br>
React </br>
Chart.js </br>
emailJS </br>


</br>

## Route Map
</br>

| Method | Endpoint | Resource/View |
|--------|----------|---------------|
|GET| "/assignments" | List All Assignments (/All.js) |
|GET| "/assignment/:id | Display Single Assignment (/One.js) |
|GET| "/new | Render Form for New Assignment (/Form.js) |
|POST| "/new" | Use Form Submission to Create New Assignment |
|GET| "/edit" | Render Form to Edit Assignment (/Form.js) |
|PUT| "/assignment/:id" | Use Form Submission to Edit Assignment |
|DELETE| "/assignment/:id" | Delete a Particular Assignment |


## Future Plans
- Currently, the checkboxes are not working.  Once that is configured, conditional styling will be used to match the color of a given assignment to its corresponding practice zone in the time chart.

- Add user authorization and authentication.

- Add a hamburger menu to the mobile design.

- Add functionality that will allow users to track their progress on a weekly basis.

- Add more graph-based data to reflect users' practicing trends alongside Klickstein's suggestions.
<br></br>


**Link to Live Site:** TBD
