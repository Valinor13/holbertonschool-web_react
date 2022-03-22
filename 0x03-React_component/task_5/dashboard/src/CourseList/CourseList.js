import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import { CourseShape } from './CourseShape';
import './CourseList.css';
import WithLogging from '../HOC/WithLogging';

function CourseList({ listCourses }) {
  return (
    <div className='table-div'>
      <table>
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        <tbody>
          {
            listCourses.length > 0 ? listCourses.map((course) => {
              return (<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />)
            }) : <CourseListRow textFirstCell="No course available yet" isHeader={true} />
          }
        </tbody>
      </table>
    </div>
  )
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}

CourseList.defaultProps = {
  listCourses: []
}

export default WithLogging(CourseList);
