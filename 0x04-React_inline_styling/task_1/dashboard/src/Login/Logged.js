import React from 'react';
import CourseList from "../CourseList/CourseList";
import Login from "./Login";
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

function Logged({ isLoggedIn, listCourses }) {
  if (isLoggedIn) {
    return (
      <BodySectionWithMarginBottom title='Course List'>
        <CourseList listCourses={listCourses} />
      </BodySectionWithMarginBottom>
    )
  }
  return (
    <BodySectionWithMarginBottom title='Log in to continue'>
      <Login />
    </BodySectionWithMarginBottom>
  )
}

export default Logged;
