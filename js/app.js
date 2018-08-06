'use strict';

console.log('the js is linked');

const $1standPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  generateCustomers: generateRandomCustomers,
};

const seaTacAirport = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  generateCustomers: generateRandomCustomers,
};

const seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  generateCustomers: generateRandomCustomers,
};

const capitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  generateCustomers: generateRandomCustomers,
};

const alki = {
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