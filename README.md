# mocha-chai-boilerplate
Simple test boilerplate code. This repository can help bootstrap testing in a project.

The benefit of this boilerplate is that the test files automatically import their corresponding source files. This makes unit testing easy.

## Using the `template.txt`

Inside your `/test` folder, create test files that match your `/src` structure. For example, your folder structure might look like the following, with each `test-*.js` file being a copy of `template.txt`.

```
/src
  /index.js
  /helpers
    /utils.js
    /strings.js
/test
  /test-index.js
  /helpers
    /test-utils.js
    /test-utils.async.js // See below
    /test-strings.js
```

Note that both `test-utils.js` and `test-utils.async.js` will run the code in `test-utils.js`. This helps split up large numbers of tests into multiple files.

### Caveats

* Tests are in a folder named `/test` at the root of your project.
* Code are in a folder named `/src` at the root of your project.
* All test files begin with `test-`.
* All test files and source files end with `.js`.
* Code cannot be checked out to a path with `/test` in it. For example, if `test-workspace` is where your project lives, the test template won't work right.

## Adding to a project

These steps will set up a test folder, and sets up your `package.json` in order to allow for testing with the following technologies:

* Mocha: Test framework
* Chai: Assertion library
* NYC: CLI for the Istanbul test runner, including enforcing coverage

This repository has examples of all the files you need to get set up below.

### Get the dependencies

Inside your project, run the following:

```
> npm install chai mocha nyc --save-dev
```

### Set up your test folder

Either copy the test folder from this package, or do the following:

* Create `/test` as a folder
* Inside it, create a `mocha.opts` file
* This file should contain `--recursive` as its contents
* Copy `template.js` to a file like `test-index.js`. Keep `template.js` around, for testing other files

### Set up your `npm test`

Add this to your `package.json` under `scripts`:

```
// With linting, see below
"test": "nyc --check-coverage --lines 75  --functions 75 --branches 50 --reporter=html --reporter=text mocha --exit && npm run lint"

// Without linting
"test": "nyc --check-coverage --lines 75  --functions 75 --branches 50 --reporter=html --reporter=text mocha --exit"
```

You can change `--lines`, `--functions`, and `--branches` if you need higher or lower coverage.

### Set up your `.gitignore`

Add the following lines to your `.gitignore`. If you don't have this file, add it to your repository:

```
.nyc_output
coverage
```

## Linting

I like using ES Lint with AirBnB's style guide. It's very very good but not perfect, but many developers are familiar with it.

### Get the dependencies

Inside your project, run the following:

```
> npx install-peerdeps --dev eslint-config-airbnb-base
```

### Configure ES Lint

* Copy the `.eslintrc` file from this repository to your repository
* Add any custom rules here under the `rules` property

### Set up `npm run lint` as a command

Add this to your `package.json`, under `scripts`:

```
  "lint": "./node_modules/.bin/eslint resources ./lib"
```

## Testing

To ensure this repository works:

* `npm install`
* `npm test`

Should run tests and lint, with no errors.
