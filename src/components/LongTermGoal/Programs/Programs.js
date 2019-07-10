import React from 'react';

import classes from './Programs.css';

const programs = (props) => (
  <div>
    {props.programs.map((prog, i)=> (
      <div key={i}>
        <h3>{prog.Title}</h3>
        <div>{prog.Description}</div>
        <a className={classes.Link} href={prog.Link}>Go to program</a>
        <div>{props.percentageCoverage}</div>
      </div>
    ))}
  </div>
);

export default programs;
