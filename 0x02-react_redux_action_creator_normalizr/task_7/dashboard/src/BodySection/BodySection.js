import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  smallBodySection: {
    '@media (max-width: 900px)': {
      width: "300px",
    }
  }
});


class BodySection extends Component {
  render() {
    return (
      <div className={css(styles.smallBodySection)}>
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

export default BodySection;
