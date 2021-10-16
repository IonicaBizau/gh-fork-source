<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


















# gh-fork-source

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/gh-fork-source.svg)](https://www.npmjs.com/package/gh-fork-source) [![Downloads](https://img.shields.io/npm/dt/gh-fork-source.svg)](https://www.npmjs.com/package/gh-fork-source) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

<a href="https://www.buymeacoffee.com/H96WwChMy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>







> Get the source repository of a GitHub fork.

















## :cloud: Installation

```sh
# Using npm
npm install --save gh-fork-source

# Using yarn
yarn add gh-fork-source
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











## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:





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


## :sparkling_heart: Support my projects
I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart love U so much:
















## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - `pull-from-source`











## :scroll: License

[MIT][license] © [Ionică Bizău][website]






[license]: /LICENSE
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
