"use strict";

const ghForkSource = require("../lib");

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
