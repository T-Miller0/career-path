import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faDollarSign, faClock } from '@fortawesome/free-solid-svg-icons'

import classes from './LongTermGoal.css';
import ListOfSkills from '../SkillsForRole/ListOfSkills/ListOfSkills';

const longTermGoal = (props) => (
  <div className={classes.LongTermGoal}>
    <h3><FontAwesomeIcon icon={faFlag}
      className={classes.Position} />
    {props.details.name}</h3>
    <div className={classes.Green}>
    <FontAwesomeIcon icon={faDollarSign}
      className={classes.IconGreen}/>
      {(props.salaryPercentage <= 0 ? '-' + props.salaryPercentage + '%' :
      '+' + props.salaryPercentage + '%') }</div>
    <div className={classes.Experience}>
      <FontAwesomeIcon icon={faClock} className={classes.Clock} />
      {props.details.details.experienceYears} years experience</div>
    <h2>Skills typically needed for this role</h2>
    <ListOfSkills
      skillsList={props.skillsList}/>    
  </div>
);

export default longTermGoal;
