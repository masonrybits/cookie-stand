'use strict';

var timeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var table = document.getElementById('table');
var totalHourlySale = [];
var all = [];

//Constructor Function Sale that define properties and behaviors inside of a template for our objects
function Sale(location, minCust, maxCust, avgSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.hourlyCust = [];
  this.hourlySale = [];
  this.total = 0;
  all.push(this);
}

//Protoypes for the objects
Sale.prototype.getHourlyCust = function () {
  for (var i = 0; i < timeArray.length; i++) {
    this.hourlyCust.push(Math.floor(Math.random(this.minCust, this.maxCust) * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

Sale.prototype.getHourlySale = function () {
  this.getHourlyCust();
  for (var i = 0; i < timeArray.length; i++) {
    this.hourlySale.push(Math.floor(this.hourlyCust[i] * this.avgSale));
  }
};

Sale.prototype.getTotalSale = function () {
  this.getHourlySale();
  for (var i = 0; i < timeArray.length; i++) {
    this.total += this.hourlySale[i];
  }
};

//A function that creates the header of the table
function renderHeader() {
  var newTR = document.createElement('tr');
  var firstHeader = document.createElement('th');
  firstHeader.textContent = 'Location';
  newTR.appendChild(firstHeader);
  for (var i = 0; i < timeArray.length; i++) {
    var newTH = document.createElement('th');
    newTH.textContent = timeArray[i];
    newTR.appendChild(newTH);
  }
  var lastHeader = document.createElement('th');
  lastHeader.textContent = 'Daily Location Total';
  newTR.appendChild(lastHeader);
  table.appendChild(newTR);
}

//A function that creates the middle rows of the table
Sale.prototype.renderData = function () {
  this.getTotalSale();
  var newTR = document.createElement('tr');
  var firstColumn = document.createElement('td');
  firstColumn.textContent = this.location;
  newTR.appendChild(firstColumn);
  for (var i = 0; i < timeArray.length; i++) {
    var newTD = document.createElement('td');
    newTD.textContent = this.hourlySale[i];
    newTR.appendChild(newTD);
  }
  var locationTotal = document.createElement('td');
  locationTotal.textContent = this.total;
  newTR.appendChild(locationTotal);
  table.appendChild(newTR);
};

//A function that creates the last row of the table
function renderFooter() {
  var newTR = document.createElement('tr');
  var firstColumn = document.createElement('td');
  firstColumn.textContent = 'Totals';
  newTR.appendChild(firstColumn);
  //nested for loop
  for (var i = 0; i < timeArray.length; i++) {
    var newTD = document.createElement('td');
    var totalsalesperhour = 0;
    for (var j = 0; j < all.length; j++) {
      totalsalesperhour += all[j].hourlySale[i];
    }
    totalHourlySale.push(totalsalesperhour);
    newTD.textContent = totalHourlySale[i];
    newTR.appendChild(newTD);
  }
  var locationTotal = document.createElement('td');
  var totalSale = 0;
  for (var k = 0; k < timeArray.length; k++) {
    totalSale += totalHourlySale[k];
  }
  locationTotal.textContent = totalSale;
  newTR.appendChild(locationTotal);
  table.appendChild(newTR);
}

function generateData() {
  renderHeader();
  for (var i = 0; i < all.length; i++) {
    all[i].renderData();
  }
  renderFooter();
}

new Sale('Seattle', 23, 65, 6.3);
new Sale('Tokyo', 3, 24, 1.2);
new Sale('Dubai', 11, 38, 3.7);
new Sale('Paris', 20, 38, 2.3);
new Sale('Lima', 2, 16, 4.6);

// renderHeader();
// seattle.renderData();
// tokyo.renderData();
// dubai.renderData();
// paris.renderData();
// lima.renderData();
// renderFooter();

generateData();
