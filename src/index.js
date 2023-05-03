import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App1 from './App1';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
let a = document.getElementById('root');
console.log("root " + a);
root.render(
  <React.StrictMode>
    <App />
    <App1 />
  </React.StrictMode>
);

// ReactDOM package provides DOM-specific methods
// createRoot() method lets you create a root to display React components inside a browser DOM Node
// render() method shows

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
