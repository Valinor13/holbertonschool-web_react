import React from 'react'

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <React.Fragment>
      <tr>
        {(() => {
          if (isHeader) {
            if (textSecondCell) {
              return (
                <React.Fragment>
                  <th>{textFirstCell}</th>
                  <th>{textSecondCell}</th>
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
        })}
      </tr>
    </React.Fragment>
  )
}

export default CourseListRow