
var assert = require('assert');
var table = require('..');

describe('table()', function() {
  it('should output normal table', function() {
    var out = table([
      ['name', 'color', 'count'],
      ['Manx Loaghtan', 'brown', 1200],
      ['Merino', 'white', 534],
      ['Suffolk', 'black', 200]
    ]);
    var expect = "| name          | color | count |\n"
               + "| ------------- | ----- | ----- |\n"
               + "| Manx Loaghtan | brown | 1200  |\n"
               + "| Merino        | white | 534   |\n"
               + "| Suffolk       | black | 200   |";

    assert.equal(out, expect);
  });

  it('should fit the number of columns to header', function() {
    var out = table([
      ['name', 'color', 'count'],
      ['Manx Loaghtan', 'brown', 1200],
      ['Merino', 'white', 534],
      ['Suffolk', 'black', 200]
    ]);
    var expect = "| name          | color | count |\n"
               + "| ------------- | ----- | ----- |\n"
               + "| Manx Loaghtan | brown | 1200  |\n"
               + "| Merino        | white | 534   |\n"
               + "| Suffolk       | black | 200   |";

    assert.equal(out, expect);
  });

  it('should align table', function() {
    var out = table([
      ['name', 'color', 'count'],
      ['Manx Loaghtan', 'brown', 1200],
      ['Merino', 'white', 534],
      ['Suffolk', 'black', 200]
    ], ['c', 'l', 'r']);
    var expect = "|     name      | color | count |\n"
               + "|:-------------:|:----- | -----:|\n"
               + "| Manx Loaghtan | brown |  1200 |\n"
               + "|    Merino     | white |   534 |\n"
               + "|    Suffolk    | black |   200 |";

    assert.equal(out, expect);
  });
});
