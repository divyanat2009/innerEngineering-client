import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FilterSortRow from './FilterSortRow';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe(`FilterSortRow component`, () => {
    
    it('renders without crashing', () => {
        const filterOptions = 'all';
        const pageType='selfcares';
           
        const div = document.createElement('div');
        ReactDOM.render(<Router><FilterSortRow filterOptions={filterOptions} pageType={pageType}/></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });
})