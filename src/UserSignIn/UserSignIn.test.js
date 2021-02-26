import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import UserSignIn from './UserSignIn';


describe(`UserSignIn component`, () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><UserSignIn /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})