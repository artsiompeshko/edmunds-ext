const TMV_VALUE_TYPES = ['great', 'fair', 'high'];

const TMV_DESCRIPTION = {
  great:
    'This vehicle is competitively priced for your immediate market!  However, this deal may be too good to be true.  Make sure to check out the vehicle thoroughly to determine why the vehicle is priced so competitively and to feel sure that you are getting a good deal.  To find other similar cars in your area, don’t hesitate to check out Edmunds.',
  fair: 'This vehicle is priced inline with similar vehicles in your immediate market.  To see what else is available and whether better deals exist, don’t hesitate to check out Edmunds.',
  high: 'This vehicle is overpriced with relation to your immediate market.  However, this may be due to some unique options and features.  Before writing off this vehicle, make sure to review everything this vehicle has to offer.  And if you would like to find a more affordable vehicle in your area, don’t hesitate to check out Edmunds.'
};

const COLORS = {
  great: 'rgb(0, 126, 229)',
  fair: 'rgb(0, 152, 194)',
  high: 'rgb(255, 130, 24)'
};

// return true if in range, otherwise false
function inRange(x, min, max) {
  return (x - min) * (x - max) <= 0;
}

function getValue({price, maxFairPrice, maxGreatPrice}) {
  if (inRange(price, 0, maxGreatPrice)) {
    return TMV_VALUE_TYPES[0];
  }

  if (inRange(price, maxFairPrice + 1, Number.MAX_SAFE_INTEGER)) {
    return TMV_VALUE_TYPES[2];
  }

  return TMV_VALUE_TYPES[1];
}

function getDescription(result) {
  return TMV_DESCRIPTION[result];
}

export const tmv = {
  getDescription,
  getValue,
  COLORS
};
