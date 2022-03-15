import React from 'react'

function FillCells({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader) {
    if (textSecondCell) {
      return (
        <React.Fragment>
          <th className='col-header'>{textFirstCell}</th>
          <th className='col-header'>{textSecondCell}</th>
        </React.Fragment>
      )
    }
    return (
      <th colSpan={2}>{textFirstCell}</th>
    )
  }
  return (
    <React.Fragment>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </React.Fragment>
  )
}

export default FillCells;
