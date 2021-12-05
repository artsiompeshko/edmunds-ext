function getPageVin() {
  return 'WAUTAAF56MA023380';
}

function getTitle(inventory) {
  return `${inventory.status} ${inventory.year} ${inventory.make} ${inventory.model}`;
}

export const vehicle = {
  getPageVin,
  getTitle
};
