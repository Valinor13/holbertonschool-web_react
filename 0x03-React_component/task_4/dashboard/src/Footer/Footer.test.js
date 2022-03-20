import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from '../../config/setupTests';
import Footer from './Footer';

const wrapper = shallow(<Footer />);

describe('Test suite for rendering the Footer component', () => {
  it('test that Footer renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('test that Footer renders with App-footer', () => {
    const element = wrapper.find('footer');
    expect(element.length).toBe(1);
  });

  it('test that Footer renders with text "Copyright"', () => {
    const element = wrapper.find('p');
    expect(element.text()).toContain("Copyright");
  });
});
