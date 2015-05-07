import React from 'react';
import './risk-level.scss';

export default class RiskLevel extends React.Component {
  render() {
    return (
      <div className="risk">
        <dl>
          <dt>Risk level</dt>
          <dd id="risk-level"></dd>
        </dl>
        <div id="dial">
          <div className="progress-pie-chart" data-percent="0">
            <div className="ppc-progress">
              <div className="ppc-progress-fill"></div>
            </div>
            <div className="ppc-percents">
              <div className="pcc-percents-wrapper"> <span>%</span> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
