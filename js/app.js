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
  let newTable = document.createElement('table');
  document.getElementsByClassName('sales-tables')[0].appendChild(newTable);
  let sectionId = storeName.replace(/\s+/g, '-').toLowerCase();
  newTable.id = sectionId;

  // let tHead = createElem('th');
  // let tRow = createElem('tr');

  function createElem(elementType, textContent) {
    let elem = document.createElement(elementType);
    elem.textContent = textContent;

    return elem;
  }

  function createHourlyData(storeName, sectionId) {
    // Variable to reset 13:00 to 1pm
    let newHour = 1;
    let total = 0;
    let table = document.getElementById(`${sectionId}`);
    let tHead = document.createElement('thead');
    let tBody = document.createElement('tbody');
    table.append(tHead);
    table.append(tBody);
    let tH = document.createElement('tr');
    tHead.append(tH);
    // Create line item for total cookies
    let liTotal = document.createElement('tr');
    let emptyCell = createElem('th');
    tH.append(emptyCell);

    tBody.append(document.createElement('th')); // adds space/empty cell above store names


    // Opening hour starts at 6 and ends after 15 hours
    for (let i = 6; i < 21; i++) {
      // Start by creating new <li> and append to each store's unique ul
      let timeHeader = createElem('th');
      tH.append(timeHeader);
      table.append(liTotal);
      let cookies = Math.ceil(store.generateCustomers() * store.avgCookies);

      // Change <li> element inner HTML based on time of day
      if (i < 12) {
        timeHeader.textContent = `${i}:00am`;
      } else if (i === 12) {
        timeHeader.textContent = `${i}:00pm`;
      } else {
        // When time of day is 13 hours, reset to 1pm
        timeHeader.textContent = `${newHour}:00pm`;
        newHour++;
      }

      total += cookies;
    }

    liTotal.innerHTML = `${total}`;
    document.getElementById(`${sectionId}`).append(liTotal);
  } // End of createHourlyData function

  createHourlyData(storeName, sectionId);
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