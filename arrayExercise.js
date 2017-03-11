// How would we get just the prices of the stocks on Christmas Eve?

var exchanges = [
  { 
    name: "NYSE",
    stocks: [
      { 
        symbol: "XFX", 
        closes: [
          { date: new Date(2014,11,24), price: 240.10 },
          { date: new Date(2014,11,23), price: 232.08 },
          { date: new Date(2014,11,22), price: 241.09 }
        ]
      },
      { 
        symbol: "TNZ", 
        closes: [
          { date: new Date(2014,11,24), price: 521.24 },
          { date: new Date(2014,11,23), price: 511.00 },
          { date: new Date(2014,11,22), price: 519.29 }     
        ]
      },
    ]
  },
  { 
    name: "TSX",
    stocks: [
      { 
        symbol: "JXJ", 
        closes: [
          { date: new Date(2014,11,24), price: 423.22 },
          { date: new Date(2014,11,23), price: 424.84 },
          { date: new Date(2014,11,22), price: 419.72 }
        ]
      },
      { 
        symbol: "NYN", 
        closes: [
          { date: new Date(2014,11,24), price: 16.82 },
          { date: new Date(2014,11,23), price: 16.12 },
          { date: new Date(2014,11,22), price: 15.77 }
        ]
      },
    ]
  }
];

// Define an nested-array flattening function
Array.prototype.concatAll = function() {
  var results = [];
  
  this.forEach(function(subArray) {
    subArray.forEach(function(item) {
      results.push(item);
    });
  });
  
  return results;
};

// map and filter
var christmasEvePrices = 
  exchanges
    .map(function(exchange) {
      return exchange.stocks;
    }).concatAll().
      map(function(stock) {
        return stock.closes;
      }).concatAll().
          filter(function(close) {
            return close.date.getDate() === 24;
          }).
          map(function(close) {
            return close.price;
          });

// print
christmasEvePrices.forEach(function(price) {
  console.log(price);
});

// Note: I authored only the section of the code commented 'map and filter'
// while taking Jafar Husain's (@jhusain) JS Array's course on egghead.io
