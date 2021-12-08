import React from 'react';
import ReactDOM from 'react-dom';
import {Widget} from './widget';
import {vehicle} from './core/vehicle/vehicle';

const pageVin = vehicle.getPageVin();
const pagePrice = vehicle.getContentPrice()[0];

console.log('Page VIN found', pageVin);
console.log('Page PRICE found', pagePrice);

if (pageVin) {
  const div = document.createElement('div');
  document.body.appendChild(div);

  ReactDOM.render(<Widget vin={pageVin} price={+pagePrice?.replace(',', '')} />, div);
}
