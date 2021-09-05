import Application from 'application';
import 'index.scss';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from 'report-web-vitals';
import { GlobalStyles } from 'twin.macro';

ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <Application />
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
