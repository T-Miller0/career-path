import React, { Component } from 'react';

import './Report.css';
import reportData from '../../data/report.json';
import PersonalDetails from '../../components/PersonalDetails/PersonalDetails';

class Store extends Component {


  render () {
    return (
      <div>
        <h1>{reportData.firstName}'s career path</h1>
        <PersonalDetails
          details={reportData}/>
        <div>Short Term Goal</div>
        <div>Long Term Goal</div>
      </div>
    )
  }
}

export default Store
