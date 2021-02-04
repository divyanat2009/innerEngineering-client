import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EntryList from './EntryList';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe(`EntryList component`, () => {    
    it('renders without crashing', () => {
        const entry = [{
            "gratitude_id":"1",
            "user_id":"1",
            "content":"A catch up phone call mom",
            "date_modified":"January 7th 2021",
            "type":"emotional",
            "rating":"5",           
        },
        {
            "gratitude_id":"2",
            "user_id":"1",
            "content":"I kept my cool with the service phone rep",
            "date_modified":"2021-01-10T19:10:27.090Z"           
        },
        {
            "gratitude_id":"2",
            "user_id":"1",
            "content":"I kept my cool with the service phone rep",
            "date_modified":"2021-01-14T19:10:27.090Z"           
        }]
        const typeOfResults = "selfcares";
        let current_display={};
        current_display[typeOfResults]={page:1, date_to:'all', date_from:'', rating:''};
        //current_display={selfcares:{page:1, date_to:'all', date_from:'', rating:''}}
           
        const div = document.createElement('div');
        ReactDOM.render(<Router><EntryList typeOfResults = {typeOfResults}  results={entry}/></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})