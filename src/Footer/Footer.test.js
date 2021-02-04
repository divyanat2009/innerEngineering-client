import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from './Footer';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe(`Footer component`, () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><Footer /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})