import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import VisualData from './VisualData';
import { BrowserRouter as Router, Link } from 'react-router-dom';


describe(`VisualData component`, () => {
  const user_id=8
  const moods=[{
    "id":"1",
    "user_id":"1",
    "mood_level":"4",
    "energy_level":"5",
    "date_modified":"2021-02-14T19:10:27.090Z",   
    "date_formatted":"January 27th 2021"
}]
  const selfcares=[{
    "selfcare_id":"1",
    "user_id":"1",
    "content":"went for a run",
    "date_modified":"January 27th 2021",
    "type":"emotional",
    "rating":"5",          
    "date_formatted":"January 27th 2021"
  },
  {
    "selfcare_id":"1",
    "user_id":"2",
    "content":"15 mins of breathing exercise",
    "date_modified":"January 27th 2021",
    "type":"physical",
    "rating":"5", 
    "date_formatted":"January 27th 2021"
  },
  {
    "selfcare_id":"1",
    "user_id":"1",
    "content":"pilates workout",
    "date_modified":"January 27th 2021",
    "type":"emotional",
    "rating":"5",
    "date_formatted":"January 27th 2021"
  }]
  beforeEach(()=>{
    window.history.pushState({}, 'Past Gratitude', '/past-care/8');

  })
    it('renders without crashing', () => {      
        const div = document.createElement('div');
        ReactDOM.render(<Router><VisualData user_id={user_id} selfcares={selfcares} moods={moods}/></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})