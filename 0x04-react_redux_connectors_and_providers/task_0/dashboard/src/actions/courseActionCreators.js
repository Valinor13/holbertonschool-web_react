import { bindActionCreators } from 'redux';
import { CourseActionType } from './courseActionTypes';

export const selectCourse = (index) => {
  return {
    type: CourseActionType.SELECT_COURSE,
    index,
  };
};

export const unselectCourse = (index) => {
  return {
    type: CourseActionType.UNSELECT_COURSE,
    index,
  };
};

export const fetchCourseSuccess = (data) => {
  return {
    type: CourseActionType.FETCH_COURSE_SUCCESS,
    data,
  };
};

export const boundCourseActions = () => {
  bindActionCreators(
    { selectCourse, unselectCourse, fetchCourseSuccess },
    dispatch
  );
};
