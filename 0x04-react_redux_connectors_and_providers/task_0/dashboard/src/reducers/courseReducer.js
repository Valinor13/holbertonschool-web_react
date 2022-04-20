const { Map } = require("immutable");
import coursesNormalizer from "../schema/courses";
import { CourseActionType } from "../actions/courseActionTypes";

// the default state should be an empty array
const defaultState = Map([]);

// When the action creator sends the action FETCH_COURSE_SUCCESS, it also sends the list of courses in a data attribute
// When updating the state of the reducer, you should also set the attribute isSelected to false for every item in the list
// When the action creator sends the action SELECT_COURSE, it also sends an index corresponding to the id of the course to update
// When the action creator sends the action UNSELECT_COURSE, it also sends an index corresponding to the id of the course to update
export default function courseReducer(state = defaultState, action) {
  switch (action.type) {
    case CourseActionType.FETCH_COURSE_SUCCESS:
      // return state.map((course) => {
      //   const actionItems = action.data.filter((item) => item.id === course.id);
      //   for (let i = 0; i < actionItems.length; i++) {
      //     return {
      //       ...course,
      //       isSelected: false,
      //     };
      //   }
      // });
      return state.merge(coursesNormalizer(action.data));
    case CourseActionType.SELECT_COURSE:
      // return state.map((course) => {
      //   if (course.id === action.index) {
      //     return {
      //       ...course,
      //       isSelected: true,
      //     };
      //   }
      //   return course;
      // });
      return state.setIn([action.index, "isSelected"], true);
    case CourseActionType.UNSELECT_COURSE:
      // return state.map((course) => {
      //   if (course.id === action.index) {
      //     return {
      //       ...course,
      //       isSelected: false,
      //     };
      //   }
      //   return course;
      // });
      return state.setIn([action.index, "isSelected"], false);
    default:
      return state;
  }
}
