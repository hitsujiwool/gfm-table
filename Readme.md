# gfm-table

gfm-table generates [GFM (GitHub Flavored Markdown)](https://help.github.com/articles/github-flavored-markdown) style table.

## Installation

```
$ npm install gfm-table
```

## Usage

```javasciprt
var table = require('gfm-table')

var out = table([
  ['name', 'color', 'count'],        // automatically recognized as heading
  ['Manx Loaghtan', 'brown', 1200],
  ['Merino', 'white', 534],
  ['Suffolk', 'black', 200]
], ['l', 'c', 'r']);                 // alignments (l: left, c: center, r: right) are optional

console.log(out);

/*
Output is

| name          | color | count |
|:------------- |:-----:| -----:|
| Manx Loaghtan | brown | 1200  |
| Merino        | white | 534   |
| Suffolk       | black | 200   |

*/

```

## License

MIT
