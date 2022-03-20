import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from '../../config/setupTests';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

describe('Test suite for rendering the CourseList component', () => {

  it('test that CourseList renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CourseList />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('test that CourseList renders 5 cells when list is not empty', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow).length).toBe(5);
  });

  it('test that CourseList renders 3 cells when list is empty', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow).length).toBe(3);
  });

});
