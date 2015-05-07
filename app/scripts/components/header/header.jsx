import React from 'react';
import ProgressBar from '../progress-bar/progress-bar';
import RiskLevel from '../risk-level/risk-level';
import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className="static">
        <div className="inner">
          <div className="col"> <a href="../index.htm" id="logo"><img src="/images/color-logo.png" alt="ConsumerAlerts" /></a>
            <dl className="
              ">
              <dt>Your progress:</dt>
              <dd id="step-number"> <span className="ts">of 10</span></dd>
            </dl>
          </div>
          <RiskLevel/>
          <ProgressBar/>
        </div>
      </header>
    );
  }
}
