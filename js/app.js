'use strict';

console.log('the js is linked');

// global variables
const $1stAndPike = new Store('1st and Pike', 23, 65, 6.3);
const seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
const seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
const capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
const alki = new Store('Alki', 2, 16, 4.6);

const stores = [
  $1stAndPike,
  seaTacAirport,
  seattleCenter,
  capitolHill,
  alki
];

// set up instance methods to attach to constructor
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

  function createElem(elementType, textContent) {
    let elem = document.createElement(elementType);
    elem.textContent = textContent;

    return elem;
  }

  // Append a new div and the store name to the DOM
  function appendShopName(storeName) {
    let newHeading = createElem('h2', storeName);
    document.body.appendChild(newDiv);
    newDiv.appendChild(newHeading);
    let storeUl = newDiv.appendChild(newUl);
    storeUl.id = `${divId}-ul`;

    // Return the newly created HTML elements to test correct values
    return [newDiv, newHeading, newUl, storeName];
  }

  // console.log(appendShopName(storeName));
  appendShopName(storeName);

  function createHourlyData(divId) {
    // Variable to reset 13:00 to 1pm
    let newHour = 1;
    let total = 0;
    // Create line item for total cookies
    let liTotal = document.createElement('li');

    // Opening hour starts at 6 and ends after 15 hours
    for (let i = 6; i < 21; i++) {
      // Start by creating new <li> and append to each store's unique ul
      let liElement = document.createElement('li');
      document.getElementById(`${divId}-ul`).append(liElement);
      document.getElementById(`${divId}-ul`).append(liTotal);
      let cookies = Math.ceil(store.generateCustomers() * store.avgCookies);

      // Change <li> element inner HTML based on time of day
      if (i < 12) {
        liElement.innerHTML = `${i}am: ${cookies} cookies`;
      } else if (i === 12) {
        liElement.innerHTML = `${i}pm: ${cookies} cookies`;
      } else {
        // When time of day is 13 hours, reset to 1pm
        liElement.innerHTML = `${newHour}pm: ${cookies} cookies`;
        newHour++;
      }

      total += cookies;
    }

    liTotal.innerHTML = `Total: ${total} cookies`;
    document.getElementById(`${divId}-ul`).append(liTotal);
  } // End of createHourlyData function

  createHourlyData(divId);
}

// set up a constructor
function Store(name, minCustomers, maxCustomers, avgCookies) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
}

// attach instance methods
Store.prototype.generateCustomers = generateRandomCustomers;
Store.prototype.displayInfo = displayStoreInfo;

// runner code
function generateStores(stores) {
  stores.forEach(store => store.displayInfo(store));
}

generateStores(stores);