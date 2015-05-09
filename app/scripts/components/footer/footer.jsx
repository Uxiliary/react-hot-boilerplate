import React from 'react';
import './footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="inner">
        <p>Copyright &copy; ConsumerAlerts 2015. All Rights Reserved. <a href="#">Privacy Policy</a> <a href="#">Terms &amp; Conditions</a></p>
        <img src="/images/gray-logo.png" alt="" />
        </div>
      </footer>
    );
  }
}
