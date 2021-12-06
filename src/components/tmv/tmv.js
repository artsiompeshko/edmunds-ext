import React from 'react';
import {tmv} from '../../core/tmv/tmv';
import Chart from './chart/chart';
import './tmv.css';

function TmvReport({price, maxGreatPrice, maxFairPrice}) {
  const value = tmv.getValue({price, maxFairPrice, maxGreatPrice});

  return (
    <div>
      <span className="fs-6 d-flex align-items-center justify-content-center size-20 text-capitalize">
        Dealer Price
      </span>
      <p
        style={{color: tmv.COLORS[value]}}
        className="font-weight-bold d-flex align-items-center justify-content-center size-20 text-capitalize"
      >
        {value} Price: ${price}
      </p>
      <Chart value={value} maxFairPrice={maxFairPrice} maxGreatPrice={maxGreatPrice} />
      <p style={{borderColor: tmv.COLORS[value]}} className="edm-ext-tmv-text ps-2 mt-4">
        {tmv.getDescription(value)}
      </p>
    </div>
  );
}

export default TmvReport;
