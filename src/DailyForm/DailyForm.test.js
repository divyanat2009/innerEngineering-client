import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DailyForm from './DailyForm';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe(`DailyForm component`, () => {  
    
    it('renders without crashing', () => {  
      const match = { params: {id : 8 } }         
        const div = document.createElement('div');
        ReactDOM.render(<Router><DailyForm  match={match}/></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });
})