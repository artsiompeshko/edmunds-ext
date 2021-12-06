import React from 'react';
import ReactDOM from 'react-dom';
import './styles/bootstrap.scss';
import './styles/custom.css';
import {Widget} from './widget';
import {vehicle} from './core/vehicle/vehicle';

const pageVin = vehicle.getPageVin();
if (pageVin) {
  const div = document.createElement('div');
  document.body.appendChild(div);

  ReactDOM.render(<Widget vin={pageVin} />, div);
}
