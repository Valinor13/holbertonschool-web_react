const { CourseActions } = require("./courseActionTypes");

export function selectCourse(index) {
  return {
    type: CourseActions.SELECT_COURSE,
    index,
  };
}

export function unselectCourse(index) {
  return {
    type: CourseActions.UNSELECT_COURSE,
    index,
  };
}
