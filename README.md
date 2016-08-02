
# gh-fork-source

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/gh-fork-source.svg)](https://www.npmjs.com/package/gh-fork-source) [![Downloads](https://img.shields.io/npm/dt/gh-fork-source.svg)](https://www.npmjs.com/package/gh-fork-source) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get the source repository of a GitHub fork.

## :cloud: Installation

```sh
$ npm i --save gh-fork-source
```


## :clipboard: Example



```js
const ghForkSource = require("gh-fork-source");

// Check a local cloned forked repository
ghForkSource("path/to/local/fork", (err, sourceRepo) => {
    /* ... */
});

// Defaults:
//  remote: origin
//  path: cwd
ghForkSource((err, sourceRepo) => {
    /* ... */
});

// Don't take it from the file system
ghForkSource("ionicabizau/octo-pakia", {
    fs: false
}, (err, sourceRepo) => {
    console.log(err || sourceRepo);
    // { id: 6515967,
    //   name: 'pappu-pakia',
    //   full_name: 'rishabhp/pappu-pakia',
    //   owner:
    //    {...},
    //   ...
    //   default_branch: 'master' }
});

// Use a GitHub token for authentication
ghForkSource("path/to/local/fork", {
    // If you are going to make lots
    // of requests, you will need a token
    token: "your GitHub token"
}, (err, sourceRepo) => {
    /* ... */
});
```

## :memo: Documentation


### `ghForkSource(path, options, cb)`
Get the source repository of a GitHub fork.

#### Params
- **String** `path`: The path to the GitHub repository (or its fullname: `owner/repo`) or to the local clone.
- **Object** `options`: An object containing the following fields:
 - `remote` (String): The repository remote (default: `origin`).
 - `fs` (Boolean): If `false`, the `path` will be handled as a GitHub url.
    If `true`, the path will be searched on the local file system. Defaults to `true`.
 - `token` (String): An optional GitHub token.
- **Function** `cb`: The callback function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
