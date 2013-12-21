# Contributing

_IF YOU PLAN TO MAKE A PULL REQUEST OF YOUR CHANGES, MAKE SURE YOU ONLY EDIT THE [COFFEE FILE](coffee/revolver.coffee) AND NEVER THE JS FILES DIRECTLY. GRUNT WILL TAKE CARE OF THE JS FILES FOR YOU._

Revolver uses [Grunt](http://gruntjs.com/) and a few Grunt plugins to help make development as easy as possible. To install these tools you must have [Node](http://nodejs.org/), [NPM](https://npmjs.org/), and [Grunt-CLI](http://gruntjs.com/getting-started#installing-the-cli) installed on your machine. Install those before continuing.

### Installing Dependencies

To install all dependencies, open Terminal (*nix or Mac) or Powershell (Windows), and run:

```shell
npm install
grunt install-deps
```

### Building

This will compile, minify, generate source maps, and run all tests:

```shell
grunt build
```

To run a watch server that will rebuild upon every save, run:

```shell
grunt watch
```

### Testing

Revolver uses [Mocha](http://visionmedia.github.io/mocha/) to test itself.

###### In the console

To run tests from the console:

```shell
grunt test
```

###### In the browser

To run tests in the browser, navigate to [test/revolver.html](test/revolver.html).

###### Watch server

To run a watch server (with livereload enabled) for retesting upon every save, run:

```shell
grunt watch:test
```