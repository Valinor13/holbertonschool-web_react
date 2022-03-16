import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from '../../config/setupTests';
import CourseListRow from './CourseListRow';

describe('Test suite for rendering the CourseListRow component', () => {

  it('test that CourseListRow renders without crashing', () => {
    const div = document.createElement('tbody');
    ReactDOM.render(<CourseListRow />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('test that CourseListRow renders cell with colspan = 2', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
    expect(wrapper.contains(<th colSpan={2}>test</th>)).toBe(true);
  });

  it('test that CourseListRow renders 2 cells when header is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="tester" />);
    const element = wrapper.find('th');
    expect(element.length).toBe(2);
  });

  it('test that CourseListRow renders 2 cells when header is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="tester" />);
    const element = wrapper.find('td');
    expect(element.length).toBe(2);
  });

});
