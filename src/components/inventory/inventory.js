import React from 'react';
import cn from 'classnames';
import * as styles from './inventory.module.css';
import * as bootstrapStyles from '../../styles/bootstrap.module.scss';
import * as customStyles from '../../styles/custom.module.css';

function Inventory({vehicle}) {
  return (
    <div
      className={cn(styles['edm-ext-inventory'], customStyles['p-2_5'], bootstrapStyles['mb-1'])}
    >
      <section>
        <div className={cn(bootstrapStyles['mt-1'])}>{vehicle.status}</div>
        <h3
          className={cn(
            bootstrapStyles['text-black'],
            bootstrapStyles['d-inline-block'],
            bootstrapStyles['mb-0'],
            bootstrapStyles['fs-4']
          )}
        >
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h3>
        <div>
          <span className={cn(bootstrapStyles['text-black'])}>{vehicle.style}</span>
          <div className={cn(bootstrapStyles.small)}>
            <span>VIN: {vehicle.vin}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inventory;
