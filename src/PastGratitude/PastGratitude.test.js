import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PastGratitude from './PastGratitude';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe(`PastGratitude component`, () => {
  const user_id=8
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
  beforeEach(()=>{
    window.history.pushState({}, 'Past Gratitude', '/past-gratitude/8');

  })
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><PastGratitude user_id={user_id} gratitudes={gratitudes}/></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
      });   
})