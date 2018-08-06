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
  name: 'Seattle Center',
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
  let newDiv = document.createElement('div');
  let divId = storeName.replace(/\s+/g, '-').toLowerCase();
  newDiv.id = divId;
  let newUl = document.createElement('ul');

  // Append a new div and the store name to the DOM
  function appendShopName(storeName) {
    let newHeading = document.createElement('h2');
    newHeading.innerText = `${storeName}`;
    document.body.appendChild(newDiv);
    newDiv.appendChild(newHeading);
    let storeUl = newDiv.appendChild(newUl);
    storeUl.id = `${divId}-ul`;

    // Return the newly created HTML elements to test correct values
    return [newDiv, newHeading, newUl, storeName];
  }

  appendShopName(storeName);

  function createHourlyData(divId) {
    // Variable to reset 13:00 to 1pm
    let newHour = 1;

    // Opening hour starts at 6 and ends after 15 hours
    for (let j = 6; j < 21; j++) {
      // Start by creating new <li> and append to each store's unique div
      let liElement = document.createElement('li');
      document.getElementById(`${divId}-ul`).append(liElement);

      // Change <li> element inner HTML based on time of day
      if (j < 12) {
        liElement.innerHTML = `${j}am: ${Math.ceil(store.generateCustomers() * store.avgCookies)} cookies`;
      } else if (j === 12) {
        liElement.innerHTML = `${j}pm: ${Math.ceil(store.generateCustomers() * store.avgCookies)} cookies`;
      } else {
        // When time of day is 13 hours, reset to 1pm
        liElement.innerHTML = `${newHour}pm: ${Math.ceil(store.generateCustomers() * store.avgCookies)} cookies`;
        newHour++;
      }
    }
  }

  createHourlyData(divId);
}

// console.log(displayStoreInfo($1stAndPike));
displayStoreInfo($1stAndPike);
displayStoreInfo(seaTacAirport);
displayStoreInfo(seattleCenter);
displayStoreInfo(capitolHill);
displayStoreInfo(alki);
// createHourlyData();