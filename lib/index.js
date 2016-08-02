"use strict";

const ul = require("ul")
    , GitHub = require("gh.js")
    , repoUrl = require("fs-repo-url")
    , gitSource = require("git-source")
    , Err = require("err")
    ;

/**
 * ghForkSource
 * Get the source repository of a GitHub fork.
 *
 * @name ghForkSource
 * @function
 * @param {String} path The path to the GitHub repository (or its fullname: `owner/repo`) or to the local clone.
 * @param {Object} options An object containing the following fields:
 *
 *  - `remote` (String): The repository remote (default: `origin`).
 *  - `fs` (Boolean): If `false`, the `path` will be handled as a GitHub url.
 *     If `true`, the path will be searched on the local file system. Defaults to `true`.
 *  - `token` (String): An optional GitHub token.
 *
 * @param {Function} cb The callback function.
 */
module.exports = function ghForkSource (path, options, cb) {

    // source(fn);
    if (typeof path === "function") {
        cb = path;
        path = process.cwd();
        options = {};
    }

    // source(".", fn);
    // source({...}, fn);
    if (typeof options === "function") {
        cb = options;
        if (typeof path === "object") {
            options = path;
            path = process.cwd();
        } else {
            options = {};
        }
    }

    options = ul.merge(options, {
        remote: "origin"
      , fs: true
      , token: undefined
    });

    let getForkSource = (err, url) => {
        if (err) { return callback(err); }
        let gh = new GitHub(options.token);
        url = gitSource(url)

        if (url.source !== "github.com") {
            return cb(new Err("This is not a GitHub repository.", {
                code: "NOT_A_GITHUB_REPOSITORY"
            }));
        }

        gh.get(`repos/${url.full_name}`, (err, data) => {
            if (err) { return cb(err); }
            if (data.fork) {
                cb(null, data.parent, data);
            } else {
                cb(new Err("This repository is not a fork.", {
                    code: "NOT_A_FORK"
                }), null, data);
            }
        });

    };

    if (options.fs) {
        repoUrl(path, options.remote, getForkSource);
    } else {
        getForkSource(null, path);
    }
};
