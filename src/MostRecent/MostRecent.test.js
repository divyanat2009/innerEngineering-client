import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MostRecent from './MostRecent';
import { BrowserRouter as Router, Link } from 'react-router-dom';


describe(`MostRecent component`, () => {
  const user_id=8;
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
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><MostRecent user_id={user_id} selfcares={selfcares} gratitudes={gratitudes} /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });

})