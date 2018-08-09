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
const cookieTotals = {};

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
Store.prototype.addStore = addStoreInfo;

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

function addStoreInfo() {
  // last tr in HTML collection is Totals row. i want the last STORE th.
  let htmlCollection = document.getElementsByTagName('tr');
  let lastStoreTh = htmlCollection[htmlCollection.length-2];
  let trId = this.name.replace(/\s+/g, '-').toLowerCase();

  // create new <tr><th>store name</th></tr>
  let tR = createEl('tr', undefined, trId);
  let tH = createEl('th', this.name);

  // append new store tr next to last store's tr
  tR.append(tH);
  lastStoreTh.insertAdjacentElement('afterend', tR);

  // calculate cookie data and populate table
  this.render();
  let newDailyTotal = sumDailyTotal(trId);
  // updateSumTotals();
  sumTotals(newDailyTotal);
  updateDailyTotalofTotals();
}

// helper function
function createEl(elementType, textContent = null, id = null) {
  let elem = document.createElement(elementType);
  elem.textContent = textContent;
  elem.id = id;

  return elem;
}

// makes table and labels for locations and hours
function makeTable(stores) {
  let newHour = 1;
  let horizontalHeader = document.getElementsByClassName('hours')[0];
  let table = document.getElementsByTagName('tbody');

  // future refactor: if store is new / can't find store tr.id on page, add new tr to table
  for (let store of stores) {
    let tR = createEl('tr', undefined, store.name.replace(/\s+/g, '-').toLowerCase());
    // tR.id = store.name.replace(/\s+/g, '-').toLowerCase();
    let tH = createEl('th', store.name);
    tR.append(tH);
    table[0].append(tR);
  }

  // Add 'Location' label in table header
  let location = createEl('th', 'Location');
  horizontalHeader.appendChild(location);

  for (let i = 6; i < 21; i++) {
    let tH = createEl('th', undefined, i);
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

  let totals = createEl('tr', 'Totals', 'totals');
  table[0].append(totals);
  let dailyTotals = createEl('th', 'Daily Location Totals', 'daily-totals');
  let lastHour = document.getElementById(20);
  lastHour.insertAdjacentElement('afterend', dailyTotals);
}

function sumDailyTotal(trId) {
  let storeTotal = [];
  let tds;
  if (trId === '1st-and-pike') {
    tds = document.querySelectorAll('[id =\'1st-and-pike\'] td');
  } else {
    tds = document.querySelectorAll(`#${trId} td`);
  }

  // iterate over nodelist with relevant data from index 1 onwards
  for (let j = 1; j < tds.length; j++) {
    storeTotal.push(parseInt(tds[j].innerText));
  }

  let dailyTotal = storeTotal.reduce((acc, currentVal) => acc + currentVal);
  tds[tds.length-1].insertAdjacentElement('afterend', createEl('td', dailyTotal));
}

function updateDailyTotalofTotals() {
  let sumDailyTotals = [];

  for (let i = 15; i < document.querySelectorAll('tr td').length; i += 16) {
    sumDailyTotals.push(Number(document.querySelectorAll('tr td')[i].innerText));
  }
  // debugger;
  let sum = sumDailyTotals.slice(0, sumDailyTotals.length-1);
  debugger;
  sum.reduce((a, b) => a + b);
  document.querySelectorAll('tr td')[document.querySelectorAll('tr td').length-1].innerText = sum;
}

function sumTotals(newDailyTotal) {
  let allTotals = [];
  let totalsTd = document.querySelectorAll('#totals td');
  totalsTd.forEach(td => allTotals.push(parseInt(td.innerText)));
  let sumTotal = allTotals.reduce((a, b) => a + b);

  // replace total with new calculation if sumTotals cell already exists.
  if (totalsTd.length !== 16) {
    totalsTd[totalsTd.length-1].insertAdjacentElement('afterend', createEl('td', sumTotal));
  } else {
    totalsTd[totalsTd.length-1].textContent = sumTotal;
  }
}

// attach event listener to DOM elements that already exist on pageload
function attachAddStoreListener() {
  const addStoreButton = document.getElementsByTagName('button')[0];
  addStoreButton.addEventListener('click', makeForm);
}

// only gets fired after form is appended to page
function attachFormSubmitListener() {
  const formsDiv = document.getElementById('forms');
  formsDiv.querySelectorAll('form').forEach(form => form.addEventListener('submit', submitForm));
}

// make form function
function makeForm() {
  // append form, fieldset, inputs w id/name attributes type="number", submit onto page
  const formsDiv = document.getElementById('forms');
  const form = createEl('form', undefined, 'store-form');
  formsDiv.appendChild(form);
  const fieldset = form.appendChild(createEl('fieldset'));
  const locInput = makeDivAndAppendInputField('text', 'name', 'Enter location: ', 'name');
  const minCustInput = makeDivAndAppendInputField('number', 'minCustomers', 'Minimum customers: ');
  const maxCustInput = makeDivAndAppendInputField('number', 'maxCustomers', 'Maximum customers: ');
  const avgCookiesInput = makeDivAndAppendInputField('number', 'avgCookies', 'Avg. cookies sold per customer: ');
  avgCookiesInput.getElementsByTagName('input')[0].step = 0.1;
  const submit = makeDivAndAppendInputField('submit', 'submit');
  const formElements = [locInput, minCustInput, maxCustInput, avgCookiesInput, submit];

  for (let el of formElements) {
    fieldset.appendChild(el);
  }

  // attach listener after form is appended onto page or else error results because there's no form yet
  attachFormSubmitListener();
}

function makeDivAndAppendInputField(inputType, inputName, labelText = null, labelFor = inputName) {
  let newDiv = createEl('div');
  let label = createEl('label', labelText);
  label.htmlFor = labelFor;
  label.textContent = labelText;
  newDiv.appendChild(label);
  let input = newDiv.appendChild(createEl('input'));
  input.type = inputType;
  input.name = inputName;
  input.id = inputName;

  return newDiv;
}

// form submit handler
function submitForm(e) {
  e.preventDefault();
  const data = e.target;
  // create new Store object with (event.target.nameAttr.value)
  const store = new Store(data.name.value, parseInt(data.minCustomers.value), parseInt(data.maxCustomers.value), parseInt(data.avgCookies.value));

  // push new Store into global stores array
  stores.push(store);
  store.addStore();
}

// called once in runner code in order to create table elements to append on totals row
function renderTotals() {
  for (let clockHour in cookieTotals) {
    let sum = createEl('td', cookieTotals[clockHour], clockHour);
    document.getElementById('totals').append(sum);
  }
}

// called once in runner code to fill table with data
function inputData(stores) {
  createCookieTotalsObj();
  stores.forEach(store => {
    store.render();
    sumDailyTotal(store.name.replace(/\s+/g, '-').toLowerCase());
  });
  renderTotals();
  sumTotals();
}

// runner code
attachAddStoreListener();
makeTable(stores);
inputData(stores);