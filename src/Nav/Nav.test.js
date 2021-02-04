import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Nav from './Nav';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe(`Nav component`, () => {

    const pageType='interior'
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><Nav pageType={pageType}/></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})