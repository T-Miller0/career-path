import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faChartLine, faDollarSign, faClock } from '@fortawesome/free-solid-svg-icons'

import classes from './ShortTermGoal.css';
import SkillsForRole from './SkillsForRole';

const shortTermGoal = (props) => (
  <div className={classes.ShortTermGoal}>
    <h3><FontAwesomeIcon icon={faFlag}
      className={classes.Position} />
      {props.details.name}</h3>
    <div className={classes.Green}>
      <FontAwesomeIcon icon={faDollarSign}
        className={classes.IconGreen}/>
        {(props.salaryPercentage <= 0 ? '-' + props.salaryPercentage + '%' :
        '+' + props.salaryPercentage + '%') }</div>
    <div className={classes.Green}>
      <FontAwesomeIcon icon={faChartLine}
        className={classes.IconGreen} />
      {props.details.details.demandLevel}</div>
    <div className={classes.Experience}>
      <FontAwesomeIcon icon={faClock} className={classes.Clock} />
      {props.details.details.experienceYears} years experience</div>
      <SkillsForRole
        skillsForRole={props.skillsForRole}/>
  </div>
);

export default shortTermGoal;
