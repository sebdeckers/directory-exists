var chai = require('chai');
var expect = chai.expect;

var directoryExists = require(__dirname + '/../index.js');

describe('The directoryExists function', function() {

  var cwd = process.cwd();

  it('return true if a directory exists', function() {
    var result = directoryExists(cwd);
    expect(result).to.eql(true);
  });

  it('should return false if a directory does not exist', function() {
    var result = directoryExists(cwd + '/fakrDir');
    expect(result).to.eql(false);
  });
});
