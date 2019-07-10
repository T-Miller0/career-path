import React, { Component } from 'react';

import './Report.css';
import reportData from '../../data/report.json';
import PersonalDetails from '../../components/PersonalDetails/PersonalDetails';
import ShortTermGoal from '../../components/ShortTermGoal/ShortTermGoal';

export class Store extends Component {

  // state = {
  //   toggleDescription: false
  // }

  salaryDifference = (salary, desiredSalary) => {
    let percentage = (1 - (salary / desiredSalary)) * 100

    return percentage.toFixed(0)
  };

  mostDesiredSkills = (usersSkills, roleSkills) => {
    const allArrays = ([roleSkills.baselineSkills, roleSkills.specializedSkills, roleSkills.definingSkills, roleSkills.necessarySkills, roleSkills.distinguishingSkills]).flat()

    for (var i = 0; i < allArrays.length; i++) {
      for (var j = 0; j < usersSkills.length; j++)
        if (allArrays[i].name === usersSkills[j]) {
          allArrays.splice(i, 1)
        }
    }

    const sortedArray = allArrays.sort((a, b) => parseFloat(a.count) - parseFloat(b.count))

    for( var k = 0; k < sortedArray.length; k++ ) {
      if (sortedArray[k] === sortedArray[k + 1]) {
        sortedArray.splice(k, 1);
      }
    }
    return sortedArray
  }

  namesOfSkills = (skillList) => {
    const nameArray = []

    for (var i = 0; i < skillList.length; i++) {
      nameArray.push(skillList[i].name)
    }
    return nameArray
  }

  // showDescriptionHandler = () => {
  //   const doesShow = this.state.toggleDescription
  //   this.setState({toggleDescription: !doesShow})
  // }


  render () {

    const shortTermDesiredSkills = this.mostDesiredSkills(reportData.careerPath[0].selectedSkills, reportData.careerPath[0].details.allSkills)
    const shortTermDesiredSkillsNames = this.namesOfSkills(shortTermDesiredSkills).splice(3);

    const diference = this.salaryDifference(reportData.currentRoleDetails.salaryMean, reportData.careerPath[0].details.meanSalary)
    return (
      <div>
        <h1>{reportData.firstName}'s career path</h1>
        <PersonalDetails
          details={reportData}/>
        <h1>Your short-term goal</h1>
        <ShortTermGoal
          details={reportData.careerPath[0]}
          salaryPercentage={diference }
          skillsForRole={shortTermDesiredSkills}
          restOfSkills={shortTermDesiredSkillsNames}/>
        <div>Long Term Goal</div>
      </div>
    )
  }
}

export default Store
