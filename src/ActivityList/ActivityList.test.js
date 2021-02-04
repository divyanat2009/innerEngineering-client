import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ActivityList from './ActivityList'
import { BrowserRouter as Router, Link } from 'react-router-dom';



describe(`ActivityList component`, () => {
    

    it('renders without crashing', () => {
        const list = [{
            "gratitude_id":"1",
            "user_id":"1",
            "content":"A catch up phone call with mom",
            "date_modified":"January 7th 2020",
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
        const typePage='selfcares'
        const listHeading = 'Your Most Recent Self-Care Activities'
        const random = false
        const div = document.createElement('div');
        ReactDOM.render(<Router><ActivityList list={list} topThree={list} typePage={typePage} listHeading={listHeading} random ={random} /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})