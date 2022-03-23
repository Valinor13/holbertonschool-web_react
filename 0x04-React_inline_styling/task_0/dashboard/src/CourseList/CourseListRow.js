import React from 'react';
import PropTypes from 'prop-types';

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
          <th className='col-header'>{textFirstCell}</th>
          <th className='col-header'>{textSecondCell}</th>
        </tr>
      )
    }
    return (
      <tr style={headerStyle}>
        <th colSpan={2}>{textFirstCell}</th>
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
