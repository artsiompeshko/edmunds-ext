import React from 'react';
import cn from 'classnames';
import {vehicle} from '../../core/vehicle/vehicle';
import * as bootstrapStyles from '../../styles/bootstrap.module.scss';
import {format} from 'd3-format';

function Cards({invenotries, inventory: mainVehicle}) {
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
            <a
              href={vehicle.getEdmundsVdp({
                ...mainVehicle,
                ...inventory
              })}
              rel="noreferrer"
              target="_blank"
              key={inventory.vin}
              style={{color: '#555'}}
              className={cn(
                bootstrapStyles['col-6'],
                bootstrapStyles['me-2'],
                bootstrapStyles['text-decoration-none']
              )}
            >
              <div className={cn(bootstrapStyles.card)}>
                <img
                  src={inventory.imageUrl}
                  style={{minHeight: 94.16}}
                  className={cn(bootstrapStyles['card-img-top'])}
                  alt="Image inventory"
                />
                <div className={cn(bootstrapStyles['card-body'])}>
                  <h5
                    style={{fontSize: '20px', color: '#555'}}
                    className={cn(bootstrapStyles['card-title'])}
                  >
                    ${inventory.displayPrice}
                  </h5>
                  <p className={cn(bootstrapStyles['card-text'])}>
                    {vehicle.getTitle(mainVehicle)}
                  </p>
                  <p
                    style={{color: '#767676', fontSize: '12px'}}
                    className={cn(bootstrapStyles['card-text'])}
                  >
                    {format(',.3r')(inventory.mileage)} miles
                  </p>
                  <p
                    style={{color: '#767676', fontSize: '12px'}}
                    className={cn(bootstrapStyles, bootstrapStyles['mt-2'])}
                  >
                    {format(',.2r')(inventory.distance)} miles away
                  </p>
                </div>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}

export default Cards;
