var seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  hourlyCust: [],
  hourlySale: [],
  //a function to get an array of hourly customers rounded down
  getHourlyCust: function () {
    for (var i = 0; i < 15; i++) {
      this.hourlyCust.push(Math.floor(Math.random(this.minCust, this.maxCust) * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
    return this.hourlyCust;
  },
  //a function to get an array of hourly sales rounded down
  getHourlySale: function () {
    for (var i = 0; i < 15; i++) {
      this.hourlySale.push(Math.floor(this.hourlyCust[i] * this.avgSale));
    }
    return this.hourlySale;
  },
  //a function to get a total sale
  getTotalSale: function () {
    var total = 0;
    for (var i = 0; i < 15; i++) {
      total += this.hourlySale[i];
    }
    return total;
  },
  //a function to make a list of contents
  render: function () {
    var body = document.getElementById ('body');
    var h1Tag = document.createElement('h1');
    h1Tag.textContent = this.location;
    console.log(this.location);
    body.appendChild(h1Tag);
    var ul = document.createElement('ul');
    body.appendChild(ul);
    var timeArray = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
    for (var i = 0; i < 15; i++) {
      var li = document.createElement('li');
      li.textContent = timeArray[i] + this.hourlySale[i] + ' cookies';
      ul.appendChild(li);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.getTotalSale() + ' cookies';
    ul.appendChild(total);
  }

};

seattle.getHourlyCust();
seattle.getHourlySale();
seattle.getTotalSale();
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
    for (var i = 0; i < 15; i++) {
      this.hourlyCust.push(Math.floor(Math.random(this.minCust, this.maxCust) * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
    return this.hourlyCust;
  },
  //a function to get an array of hourly sales rounded down
  getHourlySale: function () {
    for (var i = 0; i < 15; i++) {
      this.hourlySale.push(Math.floor(this.hourlyCust[i] * this.avgSale));
    }
    return this.hourlySale;
  },
  //a function to get a total sale
  getTotalSale: function () {
    var total = 0;
    for (var i = 0; i < 15; i++) {
      total += this.hourlySale[i];
    }
    return total;
  },
  //a function to make a list of contents
  render: function () {
    var body = document.getElementById ('body');
    var h1Tag = document.createElement('h1');
    h1Tag.textContent = this.location;
    console.log(this.location);
    body.appendChild(h1Tag);
    var ul = document.createElement('ul');
    body.appendChild(ul);
    var timeArray = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
    for (var i = 0; i < 15; i++) {
      var li = document.createElement('li');
      li.textContent = timeArray[i] + this.hourlySale[i] + ' cookies';
      ul.appendChild(li);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.getTotalSale() + ' cookies';
    ul.appendChild(total);
  }

};

tokyo.getHourlyCust();
tokyo.getHourlySale();
tokyo.getTotalSale();
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
    for (var i = 0; i < 15; i++) {
      this.hourlyCust.push(Math.floor(Math.random(this.minCust, this.maxCust) * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
    return this.hourlyCust;
  },
  //a function to get an array of hourly sales rounded down
  getHourlySale: function () {
    for (var i = 0; i < 15; i++) {
      this.hourlySale.push(Math.floor(this.hourlyCust[i] * this.avgSale));
    }
    return this.hourlySale;
  },
  //a function to get a total sale
  getTotalSale: function () {
    var total = 0;
    for (var i = 0; i < 15; i++) {
      total += this.hourlySale[i];
    }
    return total;
  },
  //a function to make a list of contents
  render: function () {
    var body = document.getElementById ('body');
    var h1Tag = document.createElement('h1');
    h1Tag.textContent = this.location;
    console.log(this.location);
    body.appendChild(h1Tag);
    var ul = document.createElement('ul');
    body.appendChild(ul);
    var timeArray = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
    for (var i = 0; i < 15; i++) {
      var li = document.createElement('li');
      li.textContent = timeArray[i] + this.hourlySale[i] + ' cookies';
      ul.appendChild(li);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.getTotalSale() + ' cookies';
    ul.appendChild(total);
  }

};

dubai.getHourlyCust();
dubai.getHourlySale();
dubai.getTotalSale();
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
    for (var i = 0; i < 15; i++) {
      this.hourlyCust.push(Math.floor(Math.random(this.minCust, this.maxCust) * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
    return this.hourlyCust;
  },
  //a function to get an array of hourly sales rounded down
  getHourlySale: function () {
    for (var i = 0; i < 15; i++) {
      this.hourlySale.push(Math.floor(this.hourlyCust[i] * this.avgSale));
    }
    return this.hourlySale;
  },
  //a function to get a total sale
  getTotalSale: function () {
    var total = 0;
    for (var i = 0; i < 15; i++) {
      total += this.hourlySale[i];
    }
    return total;
  },
  //a function to make a list of contents
  render: function () {
    var body = document.getElementById ('body');
    var h1Tag = document.createElement('h1');
    h1Tag.textContent = this.location;
    console.log(this.location);
    body.appendChild(h1Tag);
    var ul = document.createElement('ul');
    body.appendChild(ul);
    var timeArray = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
    for (var i = 0; i < 15; i++) {
      var li = document.createElement('li');
      li.textContent = timeArray[i] + this.hourlySale[i] + ' cookies';
      ul.appendChild(li);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.getTotalSale() + ' cookies';
    ul.appendChild(total);
  }

};

paris.getHourlyCust();
paris.getHourlySale();
paris.getTotalSale();
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
    for (var i = 0; i < 15; i++) {
      this.hourlyCust.push(Math.floor(Math.random(this.minCust, this.maxCust) * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
    return this.hourlyCust;
  },
  //a function to get an array of hourly sales rounded down
  getHourlySale: function () {
    for (var i = 0; i < 15; i++) {
      this.hourlySale.push(Math.floor(this.hourlyCust[i] * this.avgSale));
    }
    return this.hourlySale;
  },
  //a function to get a total sale
  getTotalSale: function () {
    var total = 0;
    for (var i = 0; i < 15; i++) {
      total += this.hourlySale[i];
    }
    return total;
  },
  //a function to make a list of contents
  render: function () {
    var body = document.getElementById ('body');
    var h1Tag = document.createElement('h1');
    h1Tag.textContent = this.location;
    console.log(this.location);
    body.appendChild(h1Tag);
    var ul = document.createElement('ul');
    body.appendChild(ul);
    var timeArray = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
    for (var i = 0; i < 15; i++) {
      var li = document.createElement('li');
      li.textContent = timeArray[i] + this.hourlySale[i] + ' cookies';
      ul.appendChild(li);
    }
    var total = document.createElement('li');
    total.textContent = 'Total: ' + this.getTotalSale() + ' cookies';
    ul.appendChild(total);
  }

};

lima.getHourlyCust();
lima.getHourlySale();
lima.getTotalSale();
lima.render();