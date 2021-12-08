import React from 'react';
import cn from 'classnames';
import * as styles from './inventory.module.scss';
import * as bootstrapStyles from '../../styles/bootstrap.module.scss';
import * as customStyles from '../../styles/custom.module.scss';

function Inventory({vehicle}) {
  return (
    <div
      className={cn(styles['edm-ext-inventory'], customStyles['p-2_5'], bootstrapStyles['mb-2'])}
    >
      <section>
        <h3
          className={cn(
            bootstrapStyles['text-black'],
            bootstrapStyles['d-inline-block'],
            bootstrapStyles['mb-0']
          )}
          style={{
            fontSize: '24px'
          }}
        >
          {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
        </h3>
        <div>
          <span className={cn(bootstrapStyles['text-black'])}>{vehicle.style}</span>
          <div>
            <span style={{fontSize: '14px'}}>VIN: {vehicle.vin}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inventory;
