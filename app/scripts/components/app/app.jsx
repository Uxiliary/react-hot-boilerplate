import React from 'react';
import Header from '../header/header.jsx';
import Step from '../step/step.jsx';
import Footer from '../footer/footer.jsx';

import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Header/>
        <Step/>
        <Footer/>
      </div>
    );
  }
}
