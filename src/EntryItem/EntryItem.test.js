import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EntryItem from './EntryItem';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe(`EntryItem component`, () => {    
    it('renders without crashing', () => {

        const entry = [{
            "gratitude_id":"1",
            "user_id":"1",
            "content":"A catch up phone call with mom",
            "date_modified":"January 7th 2021",
            "type":"emotional",
            "rating":"5",           
        },
        {
            "gratitude_id":"2",
            "user_id":"1",
            "content":"I kept my cool with the service phone rep",
            "date_modified":"2021-01-14T19:10:27.090Z"           
        },
        {
            "gratitude_id":"2",
            "user_id":"1",
            "content":"I kept my cool with the service phone rep",
            "date_modified":"2021-01-14T19:10:27.090Z"           
        }]
        const typeOfResults = "selfcares"
        const key=1
           
        const div = document.createElement('div');
        ReactDOM.render(<Router><EntryItem entry={entry} typeOfResults = {typeOfResults} key={key}/></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})