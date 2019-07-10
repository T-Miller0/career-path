import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faDollarSign, faClock } from '@fortawesome/free-solid-svg-icons'

import classes from './LongTermGoal.css';
import ListOfSkills from '../SkillsForRole/ListOfSkills/ListOfSkills';
import Programs from './Programs/Programs';

const longTermGoal = (props) => (
  <div className={classes.LongTermGoal}>
    <h2><FontAwesomeIcon icon={faFlag}
      className={classes.Position} />
    {props.details.name}</h2>
    <div className={classes.Green}>
    <FontAwesomeIcon icon={faDollarSign}
      className={classes.IconGreen}/>
      {(props.salaryPercentage <= 0 ? '-' + props.salaryPercentage + '%' :
      '+' + props.salaryPercentage + '%') }</div>
    <div className={classes.Experience}>
      <FontAwesomeIcon icon={faClock} className={classes.Clock} />
      {props.details.details.experienceYears} years experience</div>
    <h2>Skills typically needed for this role</h2>
    <div className={classes.SkillsList}>
    <ListOfSkills
      skillsList={props.skillsList}/>
    </div>
    <h3>Programs that will help you to become a {props.details.name}</h3>
    <Programs
      programs={props.programs}
      percentageCoverage={props.percentageCoverage}/>
  </div>
);

export default longTermGoal;
