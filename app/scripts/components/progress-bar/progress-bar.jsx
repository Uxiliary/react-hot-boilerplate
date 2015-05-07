import React from 'react';
import './progress-bar.scss';

export default class ProgressBar extends React.Component {
  render() {
    return (
      <ol className="breadcrumbs">
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
