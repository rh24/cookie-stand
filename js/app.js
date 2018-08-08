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

// initiate object to store total cookies sold per hour
const cookieTotals = new Object();

// populate cookieTotals object with initial keys and values
function createCookieTotalsObj() {
  for (let i = 6; i < 21; i++) {
    cookieTotals[i] = 0;
  }
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
Store.prototype.render = render;

// set up instance methods to attach to constructor
function generateRandomCustomers() {
  let min = Math.ceil(this.minCustomers);
  let max = Math.floor(this.maxCustomers);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function render() {
  let trId = this.name.replace(/\s+/g, '-').toLowerCase();
  let tH = document.getElementById(trId);
  let cookies;

  for (let clockHour in cookieTotals) {
    cookies = Math.ceil(this.generateCustomers() * this.avgCookies);
    let tD = createEl('td', cookies);
    tH.append(tD);
    cookieTotals[clockHour] += cookies;
  }
}

// helper function
function createEl(elementType, textContent) {
  let elem = document.createElement(elementType);
  elem.textContent = textContent;

  return elem;
}

// makes table and labels for locations and hours
function makeTable(stores) {
  let newHour = 1;
  let horizontalHeader = document.getElementsByClassName('hours')[0];
  let table = document.getElementsByTagName('tbody');

  for (let store of stores) {
    let tR = createEl('tr');
    tR.id = store.name.replace(/\s+/g, '-').toLowerCase();
    let tH = createEl('th', store.name);
    tR.append(tH);
    table[0].append(tR);
  }

  // Add 'Location' label in table header
  let location = createEl('th', 'Location');
  horizontalHeader.appendChild(location);

  for (let i = 6; i < 21; i++) {
    let tH = createEl('th');
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

  let totals = createEl('tr', 'Totals');
  totals.id = 'totals';
  table[0].append(totals);
}

// attach event listeners to DOM elements
function attachEventListeners() {
  const addStoreButton = document.getElementsByTagName('button')[0];
  const form = document.getElementById('store-form');

  addStoreButton.addEventListener('click', makeForm);
  form.addEventListener('submit', submitForm);

}

// make form function
function makeForm() {
  // append form, fieldset, inputs w id/name attributes type="number", submit onto page
  const formsDiv = document.getElementById('forms');
  debugger;

  // formsDiv.append;
}

function submitForm() {
  // on form submit, append data to document.querySelectorAll('tr th')[last].append
  // create new Store object with (event.target.nameAttr.value)
}


// called once in runner code in order to create table elements to append on totals row
function renderTotals() {
  for (let clockHour in cookieTotals) {
    let sum = createEl('td', cookieTotals[clockHour]);
    document.getElementById('totals').append(sum);
  }
}

// called once in runner code to fill table with data
function inputData(stores) {
  createCookieTotalsObj();
  stores.forEach(store => store.render());
  renderTotals();
}

// runner code
attachEventListeners();
makeTable(stores);
inputData(stores);