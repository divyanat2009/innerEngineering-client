import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MostRecent from './MostRecent';
import { BrowserRouter as Router, Link } from 'react-router-dom';


describe(`MostRecent component`, () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><MostRecent  /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})