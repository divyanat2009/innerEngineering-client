import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import About from './About';

describe(`About component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <About/>,
            div
            )
      });

    it('renders About', () => {
        const wrapper = shallow(<About />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

})