import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './helper/ScrollToTop';
import GlobalStyles from './globalStyles';
import ErrorPage from './routes/errorPage/errorPage.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalStyles />
        <App />  
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
