const { Actions } = require("./courseActionTypes");

export function selectCourse(index) {
  return {
    type: Actions.SELECT_COURSE,
    index,
  };
}

export function unselectCourse(index) {
  return {
    type: Actions.UNSELECT_COURSE,
    index,
  };
}
