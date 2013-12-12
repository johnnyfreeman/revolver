## Contributing

Revolver uses [Grunt](http://gruntjs.com/) and a few Grunt plugins to automatically compile the CoffeeScript to JS, minify, and create a source map for each JS file. To install these tools you must have [Node](http://nodejs.org/), [NPM](https://npmjs.org/), and [Grunt-CLI](http://gruntjs.com/getting-started#installing-the-cli) installed on your machine.

To install local Grunt and it's plugins, open Terminal (*nix or Mac) or Powershell (Windows), and run:

```shell
npm install
```

To run the coffee compilation and minification tasks once, run:

```shell
grunt
```

Or, if you would rather run both tasks upon every save (usually preferred), run:

```shell
grunt server
```

Now leave the terminal window running in the background while you make your changes.

**Note**: If you plan to make a pull request of your changes, make sure you only edit the coffee file (`/coffee/revolver.coffee`) and never the js files directly. Grunt will take care of the js files for you.
