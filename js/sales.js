'use strict';

var timeArray = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

var seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  hourlyCust: [],
  hourlySale: [],
  //a function to get an array of hourly customers rounded down
  getHourlyCust: function () {
    for (var i = 0; i < timeArray.length; i++) {
      this.hourlyCust.push(Math.floor(Math.random(this.minCust, this.maxCust) * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
    return this.hourlyCust;
  },
  //a function to get an array of hourly sales rounded down
  getHourlySale: function () {
    for (var i = 0; i < timeArray.length; i++) {
      this.hourlySale.push(Math.floor(this.hourlyCust[i] * this.avgSale));
    }
    return this.hourlySale;
  },
  //a function to get a total sale
  getTotalSale: function () {
    var total = 0;
    for (var i = 0; i < timeArray.length; i++) {
      total += this.hourlySale[i];
    }
    return total;
  },
  //a function to make a list of contents
  render: function () {
    this.getHourlyCust();
    this.getHourlySale();
    this.getTotalSale();
    var body = document.getElementById('body');
    var storeName = document.createElement('h1');
    storeName.textContent = this.location;
    console.log(this.location);
    body.appendChild(storeName);
    var ul = document.createElement('ul');
    body.appendChild(ul);
    for (var i = 0; i < timeArray.length; i++) {
      var li = document.createElement('li');
      li.textContent = timeArray[i] + this.hourlySale[i] + ' cookies';
      ul.appendChild(li);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.getTotalSale() + ' cookies';
    ul.appendChild(total);
  }

};

seattle.render();


var tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  hourlyCust: [],
  hourlySale: [],
  //a function to get an array of hourly customers rounded down
  getHourlyCust: function () {
    for (var i = 0; i < timeArray.length; i++) {
      this.hourlyCust.push(Math.floor(Math.random(this.minCust, this.maxCust) * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
    return this.hourlyCust;
  },
  //a function to get an array of hourly sales rounded down
  getHourlySale: function () {
    for (var i = 0; i < timeArray.length; i++) {
      this.hourlySale.push(Math.floor(this.hourlyCust[i] * this.avgSale));
    }
    return this.hourlySale;
  },
  //a function to get a total sale
  getTotalSale: function () {
    var total = 0;
    for (var i = 0; i < timeArray.length; i++) {
      total += this.hourlySale[i];
    }
    return total;
  },
  //a function to make a list of contents
  render: function () {
    this.getHourlyCust();
    this.getHourlySale();
    this.getTotalSale();
    var body = document.getElementById('body');
    var storeName = document.createElement('h1');
    storeName.textContent = this.location;
    console.log(this.location);
    body.appendChild(storeName);
    var ul = document.createElement('ul');
    body.appendChild(ul);
    for (var i = 0; i < timeArray.length; i++) {
      var li = document.createElement('li');
      li.textContent = timeArray[i] + this.hourlySale[i] + ' cookies';
      ul.appendChild(li);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.getTotalSale() + ' cookies';
    ul.appendChild(total);
  }

};

tokyo.render();


var dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  hourlyCust: [],
  hourlySale: [],
  //a function to get an array of hourly customers rounded down
  getHourlyCust: function () {
    for (var i = 0; i < timeArray.length; i++) {
      this.hourlyCust.push(Math.floor(Math.random(this.minCust, this.maxCust) * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
    return this.hourlyCust;
  },
  //a function to get an array of hourly sales rounded down
  getHourlySale: function () {
    for (var i = 0; i < timeArray.length; i++) {
      this.hourlySale.push(Math.floor(this.hourlyCust[i] * this.avgSale));
    }
    return this.hourlySale;
  },
  //a function to get a total sale
  getTotalSale: function () {
    var total = 0;
    for (var i = 0; i < timeArray.length; i++) {
      total += this.hourlySale[i];
    }
    return total;
  },
  //a function to make a list of contents
  render: function () {
    this.getHourlyCust();
    this.getHourlySale();
    this.getTotalSale();
    var body = document.getElementById('body');
    var storeName = document.createElement('h1');
    storeName.textContent = this.location;
    console.log(this.location);
    body.appendChild(storeName);
    var ul = document.createElement('ul');
    body.appendChild(ul);
    for (var i = 0; i < timeArray.length; i++) {
      var li = document.createElement('li');
      li.textContent = timeArray[i] + this.hourlySale[i] + ' cookies';
      ul.appendChild(li);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.getTotalSale() + ' cookies';
    ul.appendChild(total);
  }

};

dubai.render();


var paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  hourlyCust: [],
  hourlySale: [],
  //a function to get an array of hourly customers rounded down
  getHourlyCust: function () {
    for (var i = 0; i < timeArray.length; i++) {
      this.hourlyCust.push(Math.floor(Math.random(this.minCust, this.maxCust) * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
    return this.hourlyCust;
  },
  //a function to get an array of hourly sales rounded down
  getHourlySale: function () {
    for (var i = 0; i < timeArray.length; i++) {
      this.hourlySale.push(Math.floor(this.hourlyCust[i] * this.avgSale));
    }
    return this.hourlySale;
  },
  //a function to get a total sale
  getTotalSale: function () {
    var total = 0;
    for (var i = 0; i < timeArray.length; i++) {
      total += this.hourlySale[i];
    }
    return total;
  },
  //a function to make a list of contents
  render: function () {
    this.getHourlyCust();
    this.getHourlySale();
    this.getTotalSale();
    var body = document.getElementById('body');
    var storeName = document.createElement('h1');
    storeName.textContent = this.location;
    console.log(this.location);
    body.appendChild(storeName);
    var ul = document.createElement('ul');
    body.appendChild(ul);
    for (var i = 0; i < timeArray.length; i++) {
      var li = document.createElement('li');
      li.textContent = timeArray[i] + this.hourlySale[i] + ' cookies';
      ul.appendChild(li);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.getTotalSale() + ' cookies';
    ul.appendChild(total);
  }

};


paris.render();



var lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  hourlyCust: [],
  hourlySale: [],
  //a function to get an array of hourly customers rounded down
  getHourlyCust: function () {
    for (var i = 0; i < timeArray.length; i++) {
      this.hourlyCust.push(Math.floor(Math.random(this.minCust, this.maxCust) * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
    return this.hourlyCust;
  },
  //a function to get an array of hourly sales rounded down
  getHourlySale: function () {
    for (var i = 0; i < timeArray.length; i++) {
      this.hourlySale.push(Math.floor(this.hourlyCust[i] * this.avgSale));
    }
    return this.hourlySale;
  },
  //a function to get a total sale
  getTotalSale: function () {
    var total = 0;
    for (var i = 0; i < timeArray.length; i++) {
      total += this.hourlySale[i];
    }
    return total;
  },
  //a function to make a list of contents
  render: function () {
    this.getHourlyCust();
    this.getHourlySale();
    this.getTotalSale();
    var body = document.getElementById('body');
    var storeName = document.createElement('h1');
    storeName.textContent = this.location;
    console.log(this.location);
    body.appendChild(storeName);
    var ul = document.createElement('ul');
    body.appendChild(ul);
    for (var i = 0; i < timeArray.length; i++) {
      var li = document.createElement('li');
      li.textContent = timeArray[i] + this.hourlySale[i] + ' cookies';
      ul.appendChild(li);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.getTotalSale() + ' cookies';
    ul.appendChild(total);
  }

};

lima.render();
