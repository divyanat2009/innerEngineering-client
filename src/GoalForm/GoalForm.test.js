import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GoalForm from './GoalForm';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe(`GoalForm component`, () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><GoalForm /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });
})