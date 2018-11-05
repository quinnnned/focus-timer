import React from "react";
import PropTypes from "prop-types";

export default class UnixSecond extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  state = {
    second: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const second = Math.floor(Date.now() / 1000);

      if (this.state.second !== second) {
        this.setState({ second });
      }
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return this.props.children(this.state.second);
  }
}
