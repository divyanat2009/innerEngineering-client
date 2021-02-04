import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PastGratitude from './PastGratitude';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe(`PastGratitude component`, () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><PastGratitude /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });   
})