import React from 'react';
import ReactDOM from 'react-dom';
import NewToDo from '../containers/NewToDo';
import toJSON from 'enzyme-to-json';
import Enzyme, {mount, shallow, render } from 'enzyme';
// import { adapter } from 'enzyme-adapter-react-15';

const EnzymeAdapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Component: NewToDo', () => {

   it('should add an item based on the value in the state', () => {
  const component = mount(<NewToDo />);
  const preventDefault = jest.fn();
  component.setState({
    Items:['abc']
  });
  component.find('form').simulate('submit', { preventDefault });
  expect(toJSON(component)).toMatchSnapshot();
  expect(preventDefault).toBeCalled();
  });

});
