import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RandomQuote from './RandomQuote';
import { BrowserRouter as Router, Link } from 'react-router-dom';


describe(`RandomQuote component`, () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><RandomQuote /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})