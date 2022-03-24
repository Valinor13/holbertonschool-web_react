import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  tableHeader: {
    borderBottom: '3px solid lightgrey',
  },
  colHeader: {
    textAlign: 'left',
    borderBottom: '3px solid lightgrey',
  },
  bodyStyle: {
    backgroundColor: '#f5f5f5ab'
  },
  headerStyle: {
    backgroundColor: '#deb5b545'
  }
}); 

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader) {
    if (textSecondCell) {
      return (
        <tr className={css(styles.headerStyle)}>
          <th className={css(styles.colHeader)}>{textFirstCell}</th>
          <th className={css(styles.colHeader)}>{textSecondCell}</th>
        </tr>
      )
    }
    return (
      <tr className={css(styles.headerStyle)}>
        <th className={css(styles.tableHeader)} colSpan={2}>{textFirstCell}</th>
      </tr>
    )
  }
  return (
    <tr className={css(styles.bodyStyle)}>
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
