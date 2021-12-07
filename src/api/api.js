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

async function loadReviews(vin) {
  return {
    editorial: {
      name: 'Douglas Crockford',
      pros: [
        'Strong overall performance',
        'Attractive and refined interior',
        'Abundant comfort',
        'Lots of high-tech features'
      ],
      cons: [
        'Not as much trunk space as competitors',
        'Infotainment interface can be challenging and distracting to use'
      ]
    },
    consumers: [
      {
        name: 'Dzmitry H',
        date: '05/02/2011',
        rating: 4,
        short: 'Top of the line tech',
        text: 'I had a 2019 Lexus GS 350 F Sport and wanted something more modern. After doing a lot of research I decided to purchase a Audi A6 Prestige. There are a ton of features on this car including best in class interior and more screens than you could ever want. The car exudes luxury on the inside and out. Love all the technology you get with the prestige package. I do have some gripes especially with the me Audi app. You can only lock and unlock doors. There is no feature to remote start car when it is cold or hot outside. Another big miss is not having notifications on app if you leave doors unlocked. Had issues with initial app set up and called Audi 3 times. All 3 times they said they could not hear me and hung up. Having a Lexus in the past I can say service was much better with Lexus. So overall car is great with mind blowing tech but Audi needs to work on their service. Would I buy again? Time will tell.'
      },
      {
        name: 'Dzmitry M',
        date: '04/02/2021',
        rating: 5,
        short: 'Nice Car',
        text: 'Love the car'
      },
      {
        name: 'Raman B',
        date: '10/18/2021',
        rating: 3,
        short: 'Nice to drive but unreliable',
        text: 'Purchased car 5 months ago and have had it in the shop 3 times. Twice for a known infotainment problem, it keeps deleting favorite destinations including home. It is currently in the shop after it stopped running and had to be towed about 2 weeks ago. Still waiting for a fuel level sensor that they believe will fix the problem. I heard my dealer may have a couple others with the same problem. What next and can we rely on this car in the future?'
      }
    ]
  };
}

export const api = {
  loadVehicle,
  getZipCode,
  loadSimilar,
  loadTmv,
  loadReviews
};
