import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Progress from './Progress';
import { BrowserRouter as Router, Link } from 'react-router-dom';


describe(`Progress component`, () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><Progress /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})