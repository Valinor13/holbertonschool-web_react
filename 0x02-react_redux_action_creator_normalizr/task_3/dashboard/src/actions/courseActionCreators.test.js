import { selectCourse, unselectCourse } from "./courseActionCreators";

describe('Test suite for courseActionCreators', () => {
  it('tests selectCourse returns the correct object', () => {
    const expected = {
      type: 'SELECT_COURSE',
      payload: {
        index: 0,
      }
    };
    const actual = selectCourse(0);
    expect(actual).toEqual(expected);
  });

  it('tests unselectCourse returns the correct object', () => {
    const expected = {
      type: 'UNSELECT_COURSE',
      payload: {
        index: 0,
      }
    };
    const actual = unselectCourse(0);
    expect(actual).toEqual(expected);
  });
})
