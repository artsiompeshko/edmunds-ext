import React from 'react';
import {vehicle} from '../../core/vehicle/vehicle';

function Cards({invenotries}) {
  return (
    <div className="container-fluid overflow-auto">
      <div className="card-group d-flex flex-row flex-nowrap">
        {invenotries?.length > 0 &&
          invenotries.map(inventory => (
            <div key={inventory.vin} className="col-6 me-2">
              <div className="card">
                <img src={inventory.imageSrc} className="card-img-top" alt="Image inventory" />
                <div className="card-body">
                  <h5 className="card-title">${inventory.price}</h5>
                  <p className="card-text">{vehicle.getTitle(inventory)}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Cards;
