import React from 'react';
import './step-number.scss';

export default class ProgressNumber extends React.Component {
  render() {
    return (
      <dl className="step-number">
        <dt>Your progress:</dt>
        <dd id="step-number">Step 2 of 10</dd>
      </dl>
    );
  }
}
