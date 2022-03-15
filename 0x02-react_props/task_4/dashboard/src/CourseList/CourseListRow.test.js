import React from 'react';
import ReactDOM from 'react-dom';
import shallow from '../../config/setupTests';
import CourseListRow from './CourseListRow';

describe('Test suite for rendering the CourseListRow component', () => {

  it('test that CourseListRow renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CourseListRow />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('test that CourseListRow renders cell with colspan = 2', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
    const element = wrapper.find({ colSpan: 2 });
    console.log(element.length);
    expect().toBe('test');
  })

});
