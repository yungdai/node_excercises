var fs = require('fs');
var filesystem = fs.readFileSync(process.argv[2]);
var text = filesystem.toString().split('\n').length - 1;

console.log(text);

