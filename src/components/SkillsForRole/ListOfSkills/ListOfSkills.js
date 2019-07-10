import React from 'react';


const listOfSkills = (props) => (
  <div>
    {props.skillsList.map((skill, index) => (
      <li key={index}>{skill}</li>
    ))}
  </div>

);

export default listOfSkills;
