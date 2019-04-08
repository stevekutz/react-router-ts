import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App_done from './App_done';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
