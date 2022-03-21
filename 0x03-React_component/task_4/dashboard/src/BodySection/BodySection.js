import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WithLogging from '../HOC/WithLogging';

class BodySection extends Component {
  render() {
    return (
      <div className='bodySection'>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    )
  }
}

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
}

BodySection.defaultProps = {
  children: <React.Fragment />,
}

export default WithLogging(BodySection);
