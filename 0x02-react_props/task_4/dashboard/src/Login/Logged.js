import React from 'react';
import CourseList from "../CourseList/CourseList";
import Login from "./Login";

function Logged({ isLoggedIn }) {
  if (isLoggedIn) {
    return <CourseList />
  }
  return <Login />
}

export default Logged;
