import React from 'react';
import './progress-bar.scss';
import Steps from '../../data/steps.json';

export default class ProgressBar extends React.Component {
  render() {
    return (
      <ol className="breadcrumbs" data={Steps} >
        <li>Sign up</li>
        <li>Connect</li>
        <li>Kids</li>
        <li>Pets</li>
        <li>Allergies</li>
        <li>Medications</li>
        <li>Stores</li>
        <li>Vehicles</li>
        <li>Yourself</li>
        <li>Subscribed!</li>
      </ol>
    );
  }
}
