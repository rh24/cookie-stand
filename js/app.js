'use strict';

console.log('the js is linked');

const $1stAndPike = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  generateCustomers: generateRandomCustomers,
};

const seaTacAirport = {
  name: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  generateCustomers: generateRandomCustomers,
};

const seattleCenter = {
  name: 'SeattleCenter',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  generateCustomers: generateRandomCustomers,
};

const capitolHill = {
  name: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  generateCustomers: generateRandomCustomers,
};

const alki = {
  name: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  generateCustomers: generateRandomCustomers,
};

function generateRandomCustomers() {
  let min = Math.ceil(this.minCustomers);
  let max = Math.floor(this.maxCustomers);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayStoreInfo(store) {
  let storeName = store.name;

  function createLists(storeName) {
    let newDiv = document.createElement('div');
    let newHeading = document.createElement('h2');
    newHeading.innerText = `${storeName}`;
    let newUl = document.createElement('ul');

    document.body.appendChild(newDiv.appendChild(newHeading, newUl));
    return [newDiv, newHeading, newUl, storeName];
  }

  return createLists(storeName);
}

console.log(displayStoreInfo($1stAndPike));
displayStoreInfo($1stAndPike);

