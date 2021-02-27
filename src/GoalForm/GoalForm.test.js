import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GoalForm from './GoalForm';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe(`GoalForm component`, () => {
    const user_id=8;
    it('renders without crashing', () => {
      const match = { params: {id : 8 } }
        const div = document.createElement('div');
        ReactDOM.render(<Router><GoalForm match={match} user_id={user_id}/></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });
})