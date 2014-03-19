
module.exports = function(rows, align) {
  align = align || [];
  var outputs = [];
  var header = rows.shift();
  var maxLengths = rows.reduce(function(res, row) {
    var sliced = row.slice(0, res.length);
    return sliced.map(function(val, i) {
      return Math.max(res[i], val.toString().length);
    });
  }, header.map(function(val) { return val.toString().length; } ));
  
  outputs.push(header.map(function(val, i) { return ' ' + pad(val.toString(), maxLengths[i]) + ' '; }));
  outputs.push(maxLengths.map(function(n, i) {
    return (!!~'lc'.indexOf(align[i]) ? ':' : ' ') +  repeat('-', n) + (!!~'rc'.indexOf(align[i]) ? ':' : ' ');
  }));
  rows.forEach(function(row) {
    var sliced = row.slice(0, header.length);
    outputs.push(sliced.map(function(val, i) { return ' ' + pad(val.toString(), maxLengths[i]) + ' '; }));
  });

  return outputs.map(column).join("\n");
};

function column(col) {
  return '|' + col.join('|') + '|';
}

function pad(str, n) {
  for (var i = 0, len = n - str.length; i < len; i++) {
    str += ' ';
  }
  return str;
}

function repeat(chr, n) {
  var out = '';
  for (var i = 0; i < n; i++) {
    out += chr;
  }
  return out;
}
