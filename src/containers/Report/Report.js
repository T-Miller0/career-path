import React, { Component } from 'react';

import './Report.css';
import reportData from '../../data/report.json';
import PersonalDetails from '../../components/PersonalDetails/PersonalDetails';
import ShortTermGoal from '../../components/ShortTermGoal/ShortTermGoal';

export class Store extends Component {

  salaryDifference = (salary, desiredSalary) => (
    (1 - (salary / desiredSalary)) * 100
  )


  render () {
    console.log(reportData.careerPath[0])
    console.log(reportData.currentRoleDetails.salaryMean, reportData.careerPath[0].details.meanSalary)

    const diference = this.salaryDifference(reportData.currentRoleDetails.salaryMean, reportData.careerPath[0].details.meanSalary)

    return (
      <div>
        <h1>{reportData.firstName}'s career path</h1>
        <PersonalDetails
          details={reportData}/>
        <h1>Your short-term goal</h1>
        <ShortTermGoal
          details={reportData.careerPath[0]}
          salaryPercentage={diference.toFixed(0) }/>
        <div>Long Term Goal</div>
      </div>
    )
  }
}

export default Store
