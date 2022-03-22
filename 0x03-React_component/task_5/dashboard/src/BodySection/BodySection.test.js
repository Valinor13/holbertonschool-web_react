import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from '../../config/setupTests';
import BodySection from './BodySection';

describe('Test suite for BodySection', () => {

  it('tests BodySection renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BodySection />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  })

  it('test that BodySection gets rendered with the correct title and children', () => {
    const wrapper = shallow(<BodySection title='test title'><p>test children node</p></BodySection>);
    const h2 = wrapper.find('h2');
    const child = wrapper.find('p');
    expect(h2.text()).toBe('test title');
    expect(child.text()).toBe('test children node');
  })
})