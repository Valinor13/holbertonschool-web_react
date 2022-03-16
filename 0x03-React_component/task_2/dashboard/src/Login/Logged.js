import React from 'react';
import CourseList from "../CourseList/CourseList";
import Login from "./Login";

function Logged({ isLoggedIn, listCourses }) {
  if (isLoggedIn) {
    return <CourseList listCourses={listCourses} />
  }
  return <Login />
}

export default Logged;
