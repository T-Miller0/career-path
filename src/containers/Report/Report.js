import React, { Component } from 'react';

import './Report.css';
import reportData from '../../data/report.json';
import PersonalDetails from '../../components/PersonalDetails/PersonalDetails';
import ShortTermGoal from '../../components/ShortTermGoal/ShortTermGoal';

export class Store extends Component {

  salaryDifference = (salary, desiredSalary) => {
    let percentage = (1 - (salary / desiredSalary)) * 100

    return percentage.toFixed(0)
  };

  mostDesiredSkills = (usersSkills, roleSkills) => {
    const allArrays = ([roleSkills.baselineSkills, roleSkills.specializedSkills, roleSkills.definingSkills, roleSkills.necessarySkills, roleSkills.distinguishingSkills]).flat()
    const desiredSkills = []


    for (var i = 0; i < allArrays.length; i++) {
      for (var j = 0; j < usersSkills.length; j++)
        if (allArrays[i].name === usersSkills[j]) {
          allArrays.splice(i, 1)
        }
    }

    const sortedArray = allArrays.sort((a, b) => parseFloat(a.count) - parseFloat(b.count))

    return sortedArray
  }


  render () {
    // console.log(reportData.careerPath[0].details.allSkills)
    // console.log(reportData.careerPath[0].selectedSkills)
    console.log(this.mostDesiredSkills(reportData.careerPath[0].selectedSkills, reportData.careerPath[0].details.allSkills))

    const diference = this.salaryDifference(reportData.currentRoleDetails.salaryMean, reportData.careerPath[0].details.meanSalary)

    return (
      <div>
        <h1>{reportData.firstName}'s career path</h1>
        <PersonalDetails
          details={reportData}/>
        <h1>Your short-term goal</h1>
        <ShortTermGoal
          details={reportData.careerPath[0]}
          salaryPercentage={diference }/>
        <div>Long Term Goal</div>
      </div>
    )
  }
}

export default Store
