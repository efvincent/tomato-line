var through = require('through2');    // a thin wrapper around node transform streams
var path = require('path');
var Table = require('cli-table');

// Plugin level function - dealing with files
function echo() {

  // create a stream through which each file will pass
  var stream = through.obj(function(file, enc, callback) {

    var type = file.isStream() ? 'Stream' : (file.isBuffer() ? 'Buffer' : 'Unknown');
    var hint = file.jshint ? (file.jshint.success ? 'hint:OK' : 'hint:FAIL') : 'no hint';
    console.log('(%s) %s : %s', type, hint, file.path);

    this.push(file);
    return callback();
  });

   // return the file stream
   return stream;
}

module.exports = echo;