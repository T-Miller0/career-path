import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBriefcase, faGraduationCap, faClock } from '@fortawesome/free-solid-svg-icons'

import classes from './PersonalDetails.css';

const personalDetails = (props) => (
  <div className={classes.PersonalDetails}>
    <h3><FontAwesomeIcon icon={faUser} className={classes.User} />
    {props.details.firstName} {props.details.lastName}</h3>
    <div className={classes.CurrentRole} ><FontAwesomeIcon icon={faBriefcase} className={classes.Briefcase} />
      {props.details.currentRole}</div>
    <div className={classes.Education} ><FontAwesomeIcon icon={faGraduationCap} className={classes.GraduationCap} />
      {props.details.education}</div>
    <div className={classes.Education}><FontAwesomeIcon icon={faClock} className={classes.GraduationCap} />
      {props.details.experience}</div>
  </div>
);

export default personalDetails;
