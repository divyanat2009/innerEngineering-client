import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe(`Dashboard component`, () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><Dashboard /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });
})