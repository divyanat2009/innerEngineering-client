import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GoalList from './GoalList';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe(`GoalList component`, () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><GoalList /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });
})