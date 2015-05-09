import React from 'react';
import './step.scss';

export default class Step extends React.Component {
  render() {
    return (
      <article>
        <section className="stage">
          <h1>Getting Started</h1>
          <p>Connect your email address where you send your e-receipts and we'll let you
            know if any of your purchases have been recalled. We’ll continue to cover your purchases
            and alert you of any future recalls. <em>We never store your password or share your information.</em></p>
        </section>
        <section className="quiz">
          <label>Your email
            <input type="email" />
          </label>
          <a className="button loader" href="../loaders/email.htm">Continue</a> </section>
      </article>
    );
  }
}
