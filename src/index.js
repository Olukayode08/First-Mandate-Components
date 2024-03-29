import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './context/Context';
import { Darkmode } from './context/Darkmode';
import { LandlordContext } from './context/LandlordContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Darkmode>
        <Context>
          <LandlordContext>
            <App />
          </LandlordContext>
        </Context>
      </Darkmode>
    </BrowserRouter>
  </React.StrictMode>
)

