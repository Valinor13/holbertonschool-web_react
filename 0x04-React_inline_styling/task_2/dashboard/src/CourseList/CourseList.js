import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import { CourseShape } from './CourseShape';

const styles = StyleSheet.create({
  tableDiv: {
    height: '650px',
    paddingLeft: '75px',
    paddingRight: '75px',
    paddingTop: '50px',
  },
  table: {
    border: '2px solid lightgrey',
    width: '100%',
    fontSize: '25px',
    fontWeight: 'bolder',
  }
});

function CourseList({ listCourses }) {
  return (
    <div className={css(styles.tableDiv)}>
      <table className={css(styles.table)}>
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

export default CourseList;
