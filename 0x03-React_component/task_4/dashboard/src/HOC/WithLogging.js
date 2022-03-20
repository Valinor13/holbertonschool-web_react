import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WithLogging extends Component {
  componentDidMount() {
    console.log(`Component ${Component.name} is mounted`);
  }

  componentWillUnmount() {
    console.log(`Component ${Component.name} is going to unmount`);
  }

  logProps() {

    function forwardRef(props, ref) {
      return <WithLogging {...props} forwardedRef={ref} />;
    }
  
    // Give this component a more helpful display name in DevTools.
    // e.g. "ForwardRef(logProps(MyComponent))"
    const name = Component.displayName || Component.name;
    forwardRef.displayName = `WithLogging(${name})`;
  
    return React.forwardRef(forwardRef);
  }

  render() {
    return (
      <>
        {this.logProps()}
      </>
    )
  }
}

Component.propTypes = {
  name: PropTypes.string,
}

Component.defaultProps = {
  name: 'Component',
}

export default WithLogging;
