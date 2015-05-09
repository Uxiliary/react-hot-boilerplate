import React from 'react';
import StepNumber from './step-number/step-number';
import ProgressBar from './progress-bar/progress-bar';
import RiskLevel from './risk-level/risk-level';
import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className="static">
        <div className="inner">
          <div className="col"><a href="../index.htm" id="logo"><img src="/images/color-logo.png" alt="ConsumerAlerts" /></a>
            <StepNumber/>
          </div>
          <RiskLevel/>
          <ProgressBar/>
        </div>
      </header>
    );
  }
}
