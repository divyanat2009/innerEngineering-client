import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe(`Dashboard component`, () => {
  beforeEach(()=>{
    window.history.pushState({}, 'Dashboard', '/dashboard/8');
  });

    it('renders without crashing', () => {
      const user_id=8;
      const match = { params: {id : 8 } };
      const moods=[{
        "id":"1",
        "user_id":"1",
        "mood_level":"4",
        "energy_level":"5",
        "date_modified":"2021-02-14T19:10:27.090Z",   
        "date_formatted":"January 27th 2021"
    }]
      const gratitudes = [{
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
    const quotes= [{
      "id":"1",
      "content":"The grass isn't greener on the other side of the fence, the grass is greener where you water it",
      "author": "anonymous",
   }]
    const selfcares=[{
      "selfcare_id":"1",
      "user_id":"1",
      "content":"went for a run",
      "date_modified":"January 27th 2021",
      "type":"emotional",
      "rating":"5",          
    },
    {
      "selfcare_id":"1",
      "user_id":"2",
      "content":"15 mins of breathing exercise",
      "date_modified":"January 27th 2021",
      "type":"physical",
      "rating":"5", 
    },
    {
      "selfcare_id":"1",
      "user_id":"1",
      "content":"pilates workout",
      "date_modified":"January 27th 2021",
      "type":"emotional",
      "rating":"5",
    }]
        const div = document.createElement('div');
        ReactDOM.render(<Router><Dashboard match={match} user_id={user_id } gratitudes={gratitudes} selfcares={selfcares} moods={moods} quotes={quotes}/></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });
})