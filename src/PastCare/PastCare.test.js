import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PastCare from './PastCare';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe(`PastCare component`, () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><PastCare /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})