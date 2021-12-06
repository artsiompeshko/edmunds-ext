import React from 'react';
import './inventory.css';

function Inventory({vehicle}) {
  return (
    <div className="edm-ext-inventory p-2_5 mb-1">
      <section className="vin-overview text-gray-darker text-gray-darker">
        <div className="text-gray-darker mt-1 mt-md-1_25 medium">{vehicle.status}</div>
        <h3 className="not-opaque text-black d-inline-block mb-0 fs-4">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h3>
        <div className="font-weight-normal mb-1_25">
          <span className="not-opaque text-black">{vehicle.style}</span>
          <div className="small text-gray-darker mt-0_5">
            <span className="mr-1">VIN: {vehicle.vin}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inventory;
