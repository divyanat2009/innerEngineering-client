import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import UserSignUp from './UserSignUp';


describe(`UserSignUp component`, () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><UserSignUp /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})