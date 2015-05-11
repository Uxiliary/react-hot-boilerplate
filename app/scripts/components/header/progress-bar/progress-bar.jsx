import React from 'react';
import './progress-bar.scss';
import Data from '../../../data/steps.json';

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var steps = Data.map((step) => {
      return <li>{step.title}</li>;
    });

    return (
      <div>
        <ol className="breadcrumbs" >
          {steps}
        </ol>
      </div>
    );
  }
}
