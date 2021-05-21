import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import Store from './components/redux/Store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {Store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

