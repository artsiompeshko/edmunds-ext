const SRP_UNIQUE_VINS_THRESHOLD = 6;
const REGEXP_TEST_VIN = /[^\Wioq]{17}/;
const REGEXP_MATCH_VIN = /[^\Wioq]{17}/g;
const REGEXP_CONTENT_VIN = />([^\Wioq<]{17})</gi;

const REGEXP_CONTENT_PRICE = /\$([\d,]+)/gm;

/**
 *
 * @param {array} values
 * @param {int} threshold
 *
 * IF a value occurs more frequently than all other values, then return that value.
 * IF there are <={threshold} unique values with all equal occurrence counts, then use the first value.
 * IF there are >{threshold} unique values with all equal occurrence counts, then return null.
 */
const getMostFrequent = (values, threshold) => {
  const valuesMap = {};

  if (!values || !values.length) {
    return null;
  }

  // find frequencies of each value
  values.forEach(value => {
    if (!valuesMap[value]) {
      valuesMap[value] = 0;
    }

    valuesMap[value] += 1;
  });

  const keys = values;
  const frequencies = Object.keys(valuesMap).map(key => valuesMap[key]);
  const isEqualfrequency = frequencies.every(frequency => frequency === frequencies[0]);

  // if frequencies of each value are the same
  if (isEqualfrequency) {
    // check if count of unique items more than threshold
    // if so, then return nullish value
    // if no, then return the first value
    return threshold && Object.keys(valuesMap).length > threshold
      ? {
          value: null,
          count: null
        }
      : {
          value: values[0],
          count: frequencies[0]
        };
  }

  let result = keys[0];

  // find the most frequent
  for (let i = 1; i < keys.length; i += 1) {
    if (valuesMap[keys[i]] > valuesMap[result]) {
      result = keys[i];
    }
  }

  return {
    value: result,
    count: valuesMap[result]
  };
};

const isValidVIN = vin => REGEXP_TEST_VIN.test(vin);

const getUniqueVIN = vins => {
  if (!vins || !vins.length) {
    return null;
  }

  // Filter invalid vins
  const filteredVINs = vins.filter(vin => vin && isValidVIN(vin));

  if (!filteredVINs.length) {
    return null;
  }

  const mostFrequentEntry = getMostFrequent(filteredVINs, SRP_UNIQUE_VINS_THRESHOLD);

  return mostFrequentEntry.value;
};

const getDatasetVINs = () => {
  const elements = document.querySelectorAll('[data-vin]');
  return Array.prototype.slice
    .call(elements)
    .filter(el => el && el.dataset && el.dataset.vin)
    .map(el => el.dataset.vin);
};

const getInputHiddenVINs = () => {
  const elements = document.querySelectorAll('input[name="vin"]');
  return Array.prototype.slice
    .call(elements)
    .filter(el => el && el.value)
    .map(el => el.value);
};

const getContentVins = () => {
  REGEXP_CONTENT_VIN.lastIndex = 0;

  const contentText = document.body.innerHTML;
  const result = [];

  let match;

  // eslint-disable-next-line no-cond-assign
  while ((match = REGEXP_CONTENT_VIN.exec(contentText)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (match.index === REGEXP_CONTENT_VIN.lastIndex) {
      REGEXP_CONTENT_VIN.lastIndex += 1;
    }

    // if we match smth
    if (match[1]) {
      result.push(match[1]);
    }
  }

  return result;
};

const getContentPrice = () => {
  REGEXP_CONTENT_PRICE.lastIndex = 0;

  const contentText = document.body.innerHTML;
  const result = [];

  let match;

  // eslint-disable-next-line no-cond-assign
  while ((match = REGEXP_CONTENT_PRICE.exec(contentText)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (match.index === REGEXP_CONTENT_PRICE.lastIndex) {
      REGEXP_CONTENT_PRICE.lastIndex += 1;
    }

    // if we match smth
    if (match[1]) {
      result.push(match[1]);
    }
  }

  return result;
};

const getPageTitleVIN = () => {
  const VINs = document.title.match(REGEXP_MATCH_VIN);
  return VINs && VINs.length === 1 ? VINs[0] : null;
};

const getPageVIN = () => {
  const vin = getUniqueVIN([
    ...getDatasetVINs(),
    getPageTitleVIN(),
    ...getInputHiddenVINs(),
    ...getContentVins()
  ]);

  return vin;
};

function getPageVin() {
  return getPageVIN();
}

function getTitle(inventory) {
  return `${inventory.year} ${inventory.make} ${inventory.model} ${inventory.trim}`;
}

function getEdmundsVdp(vehicle) {
  let source = '';

  if (!vehicle || !vehicle.make || !vehicle.model || !vehicle.year || !vehicle.vin) {
    return null;
  }

  source = (
    'https://www.edmunds.com/' +
    vehicle.make.toLowerCase() +
    '/' +
    vehicle.model.toLowerCase() +
    '/' +
    vehicle.year +
    '/vin/' +
    vehicle.vin.toUpperCase() +
    '/'
  ).replace(/\s/g, '-');

  return source + '?utm_source=edm_ext';
}

export const vehicle = {
  getPageVin,
  getTitle,
  getContentPrice,
  getEdmundsVdp
};
