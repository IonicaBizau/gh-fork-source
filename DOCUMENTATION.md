## Documentation

You can see below the API reference of this module.

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

