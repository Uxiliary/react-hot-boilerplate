import React from 'react/addons';
import Router, { Locations } from 'react-router-component';

import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import Steps from '../steps/steps.jsx';

import { Signup, Connect, Kids } from '../steps/steps.jsx';

import './app.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    currentStep
  }

  showProgress() {
    return (
      <div>Progress!</div>
    );
  }

  render() {
    return (
      <div id="wrapper">
        <Header/>
        <Locations transitionName="carousel" onBeforeNavigation={this.showProgressBar}>
          <Location path="/" handler={Signup} matchKeys={'step'} />
          <Location path="/kids" handler={Kids} matchKeys={'step'} />
        </Locations>
        <Footer/>
      </div>
    );
  }
}
