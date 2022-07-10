import React from 'react'; // ? 6.9k (gzipped: 2.7k)
// import { React } from 'react'; // not working 4.1k (gzipped: 1.8k)
import ReactDOM from 'react-dom/client'; // ? 513 (gzipped: 319)
// import { ReactDOM } from 'react-dom/client'; // not working 506 (gzipped 325)
import './reset.css';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
