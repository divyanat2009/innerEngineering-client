import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RandomQuote from './RandomQuote';
import { BrowserRouter as Router, Link } from 'react-router-dom';


describe(`RandomQuote component`, () => {
  const quote= {
    "id":"1",
    "content":"The grass isn't greener on the other side of the fence, the grass is greener where you water it",
    "author": "anonymous",
 }
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><RandomQuote quote={quote}/></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})