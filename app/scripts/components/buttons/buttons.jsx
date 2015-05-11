import React from 'react';
import './buttons.scss';

export default class Button extends React.Component {
  constructor(props) {
    super();
    this.state = {
      liked: React.PropTypes.string
    };
  }

  changeMessage() {
    this.setState({liked: !this.state.liked});
  }

  render() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <button className="loader" onClick={this.changeMessage.bind(this)}>{this.props.type}</button>
    );
  }
}
