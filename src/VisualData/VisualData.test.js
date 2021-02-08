import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import VisualData from './VisualData';
import { BrowserRouter as Router, Link } from 'react-router-dom';


describe(`VisualData component`, () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><VisualData /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})