import { CourseActionType } from "../actions/courseActionTypes";

// the default state should be an empty array
const state = [];

// When the action creator sends the action FETCH_COURSE_SUCCESS, it also sends the list of courses in a data attribute
// When updating the state of the reducer, you should also set the attribute isSelected to false for every item in the list
// When the action creator sends the action SELECT_COURSE, it also sends an index corresponding to the id of the course to update
// When the action creator sends the action UNSELECT_COURSE, it also sends an index corresponding to the id of the course to update
export function courseReducer(state = state, action) {
  switch (action.type) {
    case CourseActionType.FETCH_COURSE_SUCCESS:
      return action.data.map((course) => ({
        ...course,
        isSelected: false,
      }));
    case CourseActionType.SELECT_COURSE:
      return state.map((course, index) => {
        if (index === action.index) {
          return {
            ...course,
            isSelected: true,
          };
        }
        return course;
      });
    case CourseActionType.UNSELECT_COURSE:
      return state.map((course, index) => {
        if (index === action.index) {
          return {
            ...course,
            isSelected: false,
          };
        }
        return course;
      });
    default:
      return state;
  }
}
