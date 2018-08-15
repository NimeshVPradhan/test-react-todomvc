import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App';
import toJSON from 'enzyme-to-json';
import Enzyme, { shallow, render, mount } from 'enzyme';
// import { adapter } from 'enzyme-adapter-react-15';

const EnzymeAdapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Component: App', () => {

  it('App renders without crashing', () => {
       const div = document.createElement('div');
       const tree = ReactDOM.render(<App/>, div);
          expect(tree).toMatchSnapshot();
   }).toJSON;

});
