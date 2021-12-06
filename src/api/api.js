async function loadVehicle(vin) {
  return {
    make: 'Audi',
    model: 'A3',
    year: 2018,
    price: 43456,
    trim: 'test',
    vin
  };
}

async function getZipCode() {
  return 92656;
}

async function loadSimilar({zip, radius, make, model, year, trim}) {
  return [
    {
      make: 'Audi',
      model: 'A4',
      year: 2013,
      trim: 'test',
      price: 41456,
      status: 'Certified',
      imageSrc: 'https://media.ed.edmunds-media.com/for-sale/32-wmwwg5c55k3d01746/img-1-960x.jpg'
    },
    {
      make: 'Audi',
      model: 'A4',
      year: 2014,
      trim: 'test-2',
      price: 40123,
      status: 'Used',
      imageSrc: 'https://media.ed.edmunds-media.com/for-sale/bd-1c6rremt7kn717104/img-1-960x.jpg'
    },
    {
      make: 'Audi',
      model: 'A4',
      year: 2013,
      trim: 'test',
      price: 41456,
      status: 'Certified',
      imageSrc: 'https://media.ed.edmunds-media.com/for-sale/32-wmwwg5c55k3d01746/img-1-960x.jpg'
    },
    {
      make: 'Audi',
      model: 'A4',
      year: 2014,
      trim: 'test-2',
      price: 40123,
      status: 'Used',
      imageSrc: 'https://media.ed.edmunds-media.com/for-sale/bd-1c6rremt7kn717104/img-1-960x.jpg'
    },
    {
      make: 'Audi',
      model: 'A4',
      year: 2013,
      trim: 'test',
      price: 41456,
      status: 'Certified',
      imageSrc: 'https://media.ed.edmunds-media.com/for-sale/32-wmwwg5c55k3d01746/img-1-960x.jpg'
    },
    {
      make: 'Audi',
      model: 'A4',
      year: 2014,
      trim: 'test-2',
      price: 40123,
      status: 'Used',
      imageSrc: 'https://media.ed.edmunds-media.com/for-sale/bd-1c6rremt7kn717104/img-1-960x.jpg'
    }
  ];
}

async function loadTmv(vin) {
  return {
    maxFairPrice: 56589,
    maxGoodPrice: 54720,
    maxGreatPrice: 54720
  };
}

export const api = {
  loadVehicle,
  getZipCode,
  loadSimilar,
  loadTmv
};
