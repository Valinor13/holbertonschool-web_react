const { CourseActionType } = require("./courseActionTypes");

export function selectCourse(index) {
  return {
    type: CourseActionType.SELECT_COURSE,
    index,
  };
}

export function unselectCourse(index) {
  return {
    type: CourseActionType.UNSELECT_COURSE,
    index,
  };
}
