import React from 'react';

import classes from './Programs.css';

const programs = (props) => (
  <div>
    {props.programs.map((prog, i)=> (
      <div key={i}>
      {console.log(prog)}
        <h3>{prog.Title}</h3>
        <div>{prog.Description}</div>
        <a className={classes.Link} href={prog.Link}>Go to program
        </a>
      </div>
    ))}
  </div>
);

export default programs;
