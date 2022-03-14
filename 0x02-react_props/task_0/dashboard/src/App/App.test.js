import React from 'react';
import ReactDOM from 'react-dom';
import { assert } from 'chai';
import shallow from '../../config/setupTests';
import App from './App';

const wrapper = shallow(<App />);

describe('Test suite for rendering the DOM', () => {
  it('test that App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    console.log('true');
    ReactDOM.unmountComponentAtNode(div);
  });
});
