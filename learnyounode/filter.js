var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, fileList) {
    // go through each file name in fileList and see if the the if the file extension matches from the process.argv fourth object in the array.
    // path.extname takes the file and checks for the file extension.
    fileList.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
            console.log(file)
    });
});