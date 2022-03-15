import React from 'react'
import FillCells from './FillCells';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr>
      <FillCells isHeader={isHeader} textFirstCell={textFirstCell} textSecondCell={textSecondCell} />
    </tr>
  )
}

export default CourseListRow;
