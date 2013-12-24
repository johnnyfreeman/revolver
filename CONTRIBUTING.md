# Contributing

_IF YOU PLAN TO MAKE A PULL REQUEST OF YOUR CHANGES, MAKE SURE YOU ONLY EDIT THE [SOURCE FILES](src/). GRUNT WILL TAKE CARE OF THE JS FILES FOR YOU._

Revolver uses [Grunt](http://gruntjs.com/) and a few Grunt plugins to help make development as easy as possible. To install these tools you must have [Node](http://nodejs.org/), [NPM](https://npmjs.org/), and [Grunt-CLI](http://gruntjs.com/getting-started#installing-the-cli) installed on your machine. Install those before continuing.

### Installing Dependencies

To install all dependencies, open Terminal (*nix or Mac) or Powershell (Windows), and run:

```shell
npm install
```

### Grunt

Grunt will lint, compile, minify, source map, and test everything for you:

```shell
grunt
```

To do all that upon every save, grunt can start a watch server for you:

```shell
grunt watch
```

### Testing

Revolver uses [Mocha](http://visionmedia.github.io/mocha/) for testing. To run tests in the browser, navigate to [test/revolver.html](test/revolver.html). To run tests in the terminal, run `grunt test` or `grunt watch:test`.