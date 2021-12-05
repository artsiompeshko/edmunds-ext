import React from 'react';
import ReactDOM from 'react-dom';
import './styles/bootstrap.css';
import './styles/custom.css';
import {Widget} from './widget';
import {vehicle} from './core/vehicle/vehicle';

const pageVin = vehicle.getPageVin();
if (pageVin) {
  const app = document.querySelector('[data-edmunds-ext-widget]');
  ReactDOM.render(<Widget vin={pageVin} />, app);
}
