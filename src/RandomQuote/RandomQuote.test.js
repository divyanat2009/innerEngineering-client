import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RandomQuote from './RandomQuote';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import IEContext from '../IEContext';
import {render} from '@testing-library/react';

function renderRandomQuote(quotes) {
  return render(
    <IEContext.Provider value={quotes}>
      <RandomQuote />
    </IEContext.Provider>
  );
}

it('renders without crashing', () => {
  
    const div = document.createElement('div');
    ReactDOM.render(<Router><RandomQuote/></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  }); 