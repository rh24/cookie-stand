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
Store.prototype.render = render;

// set up instance methods to attach to constructor
function generateRandomCustomers() {
  let min = Math.ceil(this.minCustomers);
  let max = Math.floor(this.maxCustomers);

  return Math.floor(Math.random() * (max - min + 1)) + min;
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
  // let cookies;

  for (let store of stores) {
    let tR = createElem('tr');
    tR.id = store.name.replace(/\s+/g, '-').toLowerCase();
    let tH = createElem('th', store.name);
    tR.append(tH);
    verticalHeader[0].append(tR);
  }

  // Add 'Location' label in table header
  horizontalHeader.appendChild(createElem('th', 'Location'));

  for (let i = 6; i < 21; i++) {
    let tH = createElem('th');
    horizontalHeader.appendChild(tH);

    // Change <th> text content based on time of day
    if (i < 12) {
      tH.textContent = `${i}:00am`;
    } else if (i === 12) {
      tH.textContent = `${i}:00pm`;
    } else {
      // When time of day is 13 hours, reset to 1pm
      tH.textContent = `${newHour}:00pm`;
      newHour++;
    }
  }
}

function render() {
  let trId = this.name.replace(/\s+/g, '-').toLowerCase();
  let tH = document.getElementById(trId);
  let cookies;

  for (let clockHour in cookieTotals) {
    cookies = Math.ceil(this.generateCustomers() * this.avgCookies);
    tH.append(createElem('td', cookies));
    cookieTotals[clockHour] += cookies;
  }
}

// runner code
makeTable(stores);

function inputData(stores) {
  stores.forEach(store => store.render());
}

inputData(stores);