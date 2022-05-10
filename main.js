// Simple Addition Function in Javascript
var fs = require('fs');

function add(a, b) {
    fs.rename('sample_old.txt', 'sample_new.txt', function (err) {
      if (err) throw err;
      console.log('File Renamed.');
    });
    }



console.log(add(4, 6))    