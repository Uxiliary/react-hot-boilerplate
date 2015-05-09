import React from 'react';
import './progress-bar.scss';

var fetchSteps = (cb) => {
  setTimeout(() => {
    cb([
      {
        "step": "signup",
        "title": "Sign up"
      },
      {
        "step": "connect",
        "title": "Connect"
      },
      {
        "step": "kids",
        "title": "Kids"
      },
      {
        "step": "pets",
        "title": "Pets"
      },
      {
        "step": "allergies",
        "title": "Allergies"
      },
      {
        "step": "medications",
        "title": "Medications"
      },
      {
        "step": "stores",
        "title": "Stores"
      },
      {
        "step": "vehicles",
        "title": "Vehicles"
      },
      {
        "step": "yourself",
        "title": "Yourself"
      },
      {
        "step": "subscribed",
        "title": "Subscribed!"
      }
    ]);
  }, 500)
}

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.initialValue };
  }

  componentDidMount() {
    fetchSteps((steps) => {
      this.setState({
        steps,
        loaded: true
      });
    });
  }

  render() {
    if (!this.state.loaded)
      return <div>Loading</div>;

    var steps = this.state.steps.map((step) => {
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
