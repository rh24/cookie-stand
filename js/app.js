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

const cookieTotals = {
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: 0,
  14: 0,
  15: 0,
  16: 0,
  17: 0,
  18: 0,
  19: 0,
  20: 0,
};

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

// set up instance methods to attach to constructor
function generateRandomCustomers() {
  let min = Math.ceil(this.minCustomers);
  let max = Math.floor(this.maxCustomers);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayStoreInfo(store) {
  let storeName = store.name;
}

function createElem(elementType, textContent) {
  let elem = document.createElement(elementType);
  elem.textContent = textContent;

  return elem;
}

function makeTable(stores) {
  let newHour = 1;
  let horizontalHeader = document.getElementsByClassName('hours')[0];
  let verticalHeader = document.getElementsByClassName('stores');
  let cookies;

  for (let store of stores) {
    let tR = createElem('tr', store.name);
    verticalHeader[0].append(tR);
    cookies = Math.ceil(store.generateCustomers() * store.avgCookies);
  }

  for (let i = 6; i < 21; i++) {
    let tH = createElem('th');
    horizontalHeader.appendChild(tH);
    // verticalHeader.append(rowTotals);

    // Change <li> element inner HTML based on time of day
    if (i < 12) {
      tH.textContent = `${i}:00am`;
    } else if (i === 12) {
      tH.textContent = `${i}:00pm`;
    } else {
      // When time of day is 13 hours, reset to 1pm
      tH.textContent = `${newHour}:00pm`;
      newHour++;
    }

    cookieTotals[`${i}`] += cookies;
  }
}

function createHourlyData() {
  // Variable to reset 13:00 to 1pm
  let createOnce = 1;
  let newHour = 1;
  // let total = 0;
  // Create row for total cookies

  let horizontalHeader = document.getElementsByClassName('hours')[0];
  // debugger;

  // Opening hour starts at 6 and ends after 15 hours
  for (let i = 6; i < 21; i++) {
    let tH = createElem('th');
    horizontalHeader.appendChild(tH);
    // debugger;
    // verticalHeader.append(rowTotals);
    let cookies = Math.ceil(store.generateCustomers() * store.avgCookies);

    // Change <li> element inner HTML based on time of day
    if (i < 12) {
      tH.textContent = `${i}:00am`;
    } else if (i === 12) {
      tH.textContent = `${i}:00pm`;
    } else {
      // When time of day is 13 hours, reset to 1pm
      tH.textContent = `${newHour}:00pm`;
      newHour++;
    }

    cookieTotals[`${i}`] += cookies;
  }

  // rowTotals.innerHTML = total;
  // document.getElementById(`${sectionId}`).append(rowTotals);
} // End of createHourlyData function

makeTable(stores);
// createHourlyData();

// runner code
// function generateStores(stores) {
//   stores.forEach(store => store.displayInfo(store));
// }

// generateStores(stores);