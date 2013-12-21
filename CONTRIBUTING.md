## Contributing

Revolver uses [Grunt](http://gruntjs.com/) and a few Grunt plugins to help make development as easy as possible. To install these tools you must have [Node](http://nodejs.org/), [NPM](https://npmjs.org/), and [Grunt-CLI](http://gruntjs.com/getting-started#installing-the-cli) installed on your machine. Install those before continuing.

##### Installing Dev Dependencies

To install all dependencies, open Terminal (*nix or Mac) or Powershell (Windows), and run:

```shell
npm install
grunt install-deps
```

**Note**: If you plan to make a pull request of your changes, make sure you only edit the [coffee file](coffee/revolver.coffee) and never the js files directly. Grunt will take care of the js files for you.

##### Build

This will compile, minify, generate source maps, and run all tests:

```shell
grunt build
```

To run a watch server that will rebuild upon every save, run:

```shell
grunt watch
```

##### Testing

Revolver uses [Mocha](http://visionmedia.github.io/mocha/) to test itself.

####### In the console

To run tests from the console:

```shell
grunt test
```

####### In the browser

To run tests in the browser, navigate to [test/revolver.html](test/revolver.html).

####### Watch server

To run a watch server (with livereload enabled) for retesting upon every save, run:

```shell
grunt watch:test
```