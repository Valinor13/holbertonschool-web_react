import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  th: {
    borderBottom: '3px solid lightgrey',
  },
  colHeader: {
    textAlign: 'left',
  },
});

const headerStyle = {
  backgroundColor: '#deb5b545'
}

const bodyStyle = {
  backgroundColor: '#f5f5f5ab'
}

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader) {
    if (textSecondCell) {
      return (
        <tr style={headerStyle}>
          <th className={css(styles.colHeader, styles.th)}>{textFirstCell}</th>
          <th className={css(styles.colHeader, styles.th)}>{textSecondCell}</th>
        </tr>
      )
    }
    return (
      <tr style={headerStyle}>
        <th className={css(styles.th)} colSpan={2}>{textFirstCell}</th>
      </tr>
    )
  }
  return (
    <tr style={bodyStyle}>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  )
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default CourseListRow;
