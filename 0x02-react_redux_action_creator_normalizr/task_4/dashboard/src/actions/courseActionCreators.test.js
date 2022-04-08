import { selectCourse, unselectCourse } from "./courseActionCreators";

describe("Test suite for courseActionCreators", () => {
  it("tests selectCourse returns the correct object", () => {
    const expected = {
      type: "SELECT_COURSE",
      index: 1,
    };
    const actual = selectCourse(1);
    expect(actual).toEqual(expected);
  });

  it("tests unselectCourse returns the correct object", () => {
    const expected = {
      type: "UNSELECT_COURSE",
      index: 1,
    };
    const actual = unselectCourse(1);
    expect(actual).toEqual(expected);
  });
});
