# gfm-table

gfm-table generates [GFM (GitHub Flavored Markdown)](https://help.github.com/articles/github-flavored-markdown) style table.

## Installation

```
$ npm install gfm-table
```

## Usage

```javascript
var table = require('gfm-table')

var out = table([
  ['name', 'color', 'count'],
  ['Manx Loaghtan', 'brown', 1200],
  ['Merino', 'white', 534],
  ['Suffolk', 'black', 200]
]);

console.log(out);
```
Output
```
| name          | color | count |
| ------------- | ----- | ----- |
| Manx Loaghtan | brown | 1200  |
| Merino        | white | 534   |
| Suffolk       | black | 200   |
```

With alignment options

* `l` - left
* `c` - center
* `r` - right

```javascript
var table = require('gfm-table')

var out = table([
  ['name', 'color', 'count'],
  ['Manx Loaghtan', 'brown', 1200],
  ['Merino', 'white', 534],
  ['Suffolk', 'black', 200]
], ['c', 'l', 'r']);

console.log(out);
```
Output
```
|     name      | color | count |
|:-------------:|:----- | -----:|
| Manx Loaghtan | brown |  1200 |
|    Merino     | white |   534 |
|    Suffolk    | black |   200 |
```

## License

MIT
