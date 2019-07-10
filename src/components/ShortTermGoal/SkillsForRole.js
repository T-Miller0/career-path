import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'

import classes from './SkillsForRole.css';

const skillsForRole = (props) => (
  <div>
    <h2>Top 3 most in-demand skills for this </h2>
    <div><FontAwesomeIcon icon={faFire}
      className={classes.Position} />
      {props.skillsForRole[0].name}</div>
      <div>{props.skillsForRole[0].description}</div>

    <div><FontAwesomeIcon icon={faFire}
      className={classes.Position} />
      {props.skillsForRole[1].name}</div>
      <div>{props.skillsForRole[1].description}</div>
    <div><FontAwesomeIcon icon={faFire}
      className={classes.Position} />
      {props.skillsForRole[2].name}</div>
      <div>{props.skillsForRole[2].description}</div>

  </div>
);
// <button onClick={this.showDescription}>button</button>
//   {props.descriptionState ?
  //     <div>{props.skillsForRole[0].description}</div> : null}

export default skillsForRole;
