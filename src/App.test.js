import React from 'react';
import ReactDOM from 'react-dom';
import App_done from './App_done';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App_done />, div);
  ReactDOM.unmountComponentAtNode(div);
});
