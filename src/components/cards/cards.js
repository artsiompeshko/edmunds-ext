import React from 'react';
import cn from 'classnames';
import {vehicle} from '../../core/vehicle/vehicle';
import * as bootstrapStyles from '../../styles/bootstrap.module.scss';

function Cards({invenotries}) {
  return (
    <div className={cn(bootstrapStyles['container-fluid'], bootstrapStyles['overflow-auto'])}>
      <div
        className={cn(
          bootstrapStyles['card-group'],
          bootstrapStyles['d-flex'],
          bootstrapStyles['flex-row'],
          bootstrapStyles['flex-nowrap']
        )}
      >
        {invenotries?.length > 0 &&
          invenotries.map(inventory => (
            <div
              key={inventory.vin}
              className={cn(bootstrapStyles['col-6'], bootstrapStyles['me-2'])}
            >
              <div className={cn(bootstrapStyles.card)}>
                <img
                  src={inventory.imageSrc}
                  className={cn(bootstrapStyles['card-img-top'])}
                  alt="Image inventory"
                />
                <div className={cn(bootstrapStyles['card-body'])}>
                  <h5 className={cn(bootstrapStyles['card-title'])}>${inventory.price}</h5>
                  <p className={cn(bootstrapStyles['card-text'])}>{vehicle.getTitle(inventory)}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Cards;
