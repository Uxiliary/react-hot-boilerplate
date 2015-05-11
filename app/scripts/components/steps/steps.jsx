import React from 'react';
import Button from '../buttons/buttons.jsx';
import './steps.scss';

export class Signup extends React.Component {
  render() {
    return (
      <article className="signup">
        <section className="stage">
          <h1>Getting Started {this.props.stepNumber}</h1>
          <p>Connect your email address where you send your e-receipts and we'll let you
            know if any of your purchases have been recalled. We’ll continue to cover your purchases
            and alert you of any future recalls. <em>We never store your password or share your information.</em></p>
        </section>
        <section className="quiz">
          <label>Your email
            <input type="email" />
          </label>
          <Button type="continue" />
        </section>
      </article>
    );
  }
}

export class Connect extends React.Component {
  render() {
    return (
      <article>
        <section>
          <h2>You're now subscribed!</h2>
          <p>You can look forward to receiving the latest recall alerts that are completely customized to match your profile.</p>
          <a href="#" class="button">View or edit your account</a>
          <div class="share">
            <h3>Share Consumer Alerts</h3>
            <a href="#" class="icon-twitter" aria-label="follow us on twitter"></a> <a href="#" class="icon-facebook" aria-label="follow us on facebook"></a> <a href="#" class="icon-mail" aria-label="send us an email"></a> </div>
        </section>
      </article>
    );
  }
}

export class Kids extends React.Component {
  render() {
    return (
      <article>
        <section class="stage">
          <h1>Protect Your Children</h1>
          <p>80% of all children’s products that are recalled remain in homes. If you have children Consumer Alerts will send you recalls for your children’s age.</p>
        </section>
        <section>
          <h2>What ages are your children?</h2>
          <div class="checks four-col">
            <label>0-2
              <input type="checkbox" value="0-2" />
            </label>
            <label>3-6
              <input type="checkbox" value="3-6" />
            </label>
            <label>7-10
              <input type="checkbox" value="7-10" />
            </label>
            <label>11-14
              <input type="checkbox" value="11-14" />
            </label>
            <label>15-18
              <input type="checkbox" value="15-18" />
            </label>
            <label>None
              <input type="checkbox" value="none" />
            </label>
          </div>
          <a href="email.htm" class="button back inline">Back</a> <a href="../loaders/children.htm" class="button next inline loader">Next</a> </section>
      </article>
    );
  }
}
