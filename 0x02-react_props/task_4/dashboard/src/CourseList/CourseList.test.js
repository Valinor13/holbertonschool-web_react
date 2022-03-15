import React from 'react';
import ReactDOM from 'react-dom';
import shallow from '../../config/setupTests';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('Test suite for rendering the CourseList component', () => {

  it('test that CourseList renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CourseList />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('test that CourseList renders 5 cells', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow).length).toBe(5);
  });
});
