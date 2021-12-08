import React from 'react';
import cn from 'classnames';
import {tmv} from '../../core/tmv/tmv';
import Chart from './chart/chart';

import * as bootstrapStyles from '../../styles/bootstrap.module.scss';
import * as styles from './tmv.module.scss';

function TmvReport({price, maxGreatPrice, maxFairPrice}) {
  if (!price || !maxGreatPrice || !maxFairPrice) {
    return null;
  }

  const value = tmv.getValue({price, maxFairPrice, maxGreatPrice});

  return (
    <div>
      <span
        className={cn(
          bootstrapStyles['d-flex'],
          bootstrapStyles['align-items-center'],
          bootstrapStyles['justify-content-center'],
          bootstrapStyles['text-capitalize']
        )}
        style={{fontSize: '16px'}}
      >
        Dealer Price
      </span>
      <p
        style={{color: tmv.COLORS[value], fontSize: '20px'}}
        className={cn(
          bootstrapStyles['d-flex'],
          bootstrapStyles['align-items-center'],
          bootstrapStyles['justify-content-center'],
          bootstrapStyles['text-capitalize']
        )}
      >
        {value} Price: ${price}
      </p>
      <Chart value={value} maxFairPrice={maxFairPrice} maxGreatPrice={maxGreatPrice} />
      <p
        style={{borderColor: tmv.COLORS[value]}}
        className={cn(styles['edm-ext-tmv-text'], bootstrapStyles['ps-2'], bootstrapStyles['mt-4'])}
      >
        {tmv.getDescription(value)}
      </p>
    </div>
  );
}

export default TmvReport;
