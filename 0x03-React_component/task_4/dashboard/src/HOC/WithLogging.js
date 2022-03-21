import React, { Component } from 'react';

function WithLogging(WrappedComponent) {
  const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  class Logs extends Component {
    componentDidMount() {
      console.log(`Component ${name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${name} is going to unmount`);
    }

    render() {
      return (<WrappedComponent {...this.props} />);
    }
  }
  Logs.displayName = `WithLogging(${name})`;
  return Logs;
}

export default WithLogging;
