import React from 'react';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    );
  }
}
